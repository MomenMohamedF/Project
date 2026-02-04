import React from "react";
import DarkMode from "@/components/mode/dark-mode";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  api,
  createProduct,
  deleteProduct,
  updateProduct,
} from "@/lib/utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type ProductValues = {
  title: string;
  price: number;
  category: string;
  imageUrl: string;
};

const Dashboard = () => {
  const queryClient = useQueryClient();
  const [activeMenu, setActiveMenu] = React.useState<"overview" | "products">(
    "overview"
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.get("products"),
  });

  const products: product[] = React.useMemo(() => {
    const productData = data?.data as any;

    if (Array.isArray(productData)) return productData;
    if (Array.isArray(productData?.data)) return productData.data;
    if (Array.isArray(productData?.products)) return productData.products;

    return [];
  }, [data]);

  const form = useForm<ProductValues>({
    defaultValues: {
      title: "",
      price: 0,
      category: "",
      imageUrl: "",
    },
  });
  const IdRef = React.useRef<string | null>(null);

  const createMutation = useMutation({
    mutationFn: (values: ProductValues) =>
      createProduct({
        title: values.title,
        price: values.price,
        category: values.category,
        imageUrl: values.imageUrl,
        originalPrice: values.price,
        discount: 0,
        color: "",
        material: "",
        stars: 0,
        reviewsCount: 0,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product created successfully!");
      form.reset();
    },
    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "An error occurred";
      toast.error(message);
      console.log(message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (payload: { id: string; values: ProductValues }) =>
      updateProduct(payload.id, payload.values),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product updated successfully!");
      form.reset();
      IdRef.current = null;
    },
    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "An error occurred";
      toast.error(message);
      console.log(message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted successfully!");
    },
    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "An error occurred";
      toast.error(message);
      console.log(message);
    },
  });

  function onSubmit(values: ProductValues) {
    if (IdRef.current) {
      updateMutation.mutate({ id: IdRef.current, values });
    } else {
      createMutation.mutate(values);
    }
  }

  function handleEdit(p: product) {
    IdRef.current = p._id || p.id;
    form.reset({
      title: p.title,
      price: p.price,
      category: p.category,
      imageUrl: p.imageUrl,
    });
  }

  if (error) {
    console.error(error);
  }

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-gray-900/95">
      {/* left section */}
      <aside className="w-64 bg-[#C4A029] text-white flex flex-col dark:bg-gray-900/95">
        <div className="h-16 flex items-center px-6 border-b ">
          <h1 className="text-2xl font-bold">Auréne Dashboard</h1>
        </div>

        <nav className="flex-1 py-4 space-y-1 text-sm dark:text-white/90">
          <button
            className={`w-full flex items-center px-6 py-2.5 transition ${
              activeMenu === "overview"
                ? "bg-amber-900/40 dark:bg-gray-800"
                : "hover:bg-amber-800/50"
            }`}
            onClick={() => setActiveMenu("overview")}
          >
            <span className="w-5 h-5 rounded bg-white/15 mr-3 dark:bg-gray-900/95" />
            <span>Overview</span>
          </button>
          <button className="w-full flex items-center px-6 py-2.5 hover:bg-amber-800/50 transition">
            <span className="w-5 h-5 rounded bg-white/15 mr-3" />
            <span>Orders</span>
          </button>
          <button
            className={`w-full flex items-center px-6 py-2.5 transition ${
              activeMenu === "products"
                ? "bg-amber-900/40 dark:bg-gray-800"
                : "hover:bg-amber-800/50"
            }`}
            onClick={() => setActiveMenu("products")}
          >
            <span className="w-5 h-5 rounded bg-white/15 mr-3" />
            <span>Products</span>
          </button>
          <button className="w-full flex items-center px-6 py-2.5 hover:bg-amber-800/50 transition">
            <span className="w-5 h-5 rounded bg-white/15 mr-3" />
            <span>Customers</span>
          </button>
          <button className="w-full flex items-center px-6 py-2.5 hover:bg-amber-800/50 transition">
            <span className="w-5 h-5 rounded bg-white/15 mr-3" />
            <span>Analytics</span>
          </button>
          <button className="w-full flex items-center px-6 py-2.5 hover:bg-amber-800/50 transition">
            <span className="w-5 h-5 rounded bg-white/15 mr-3" />
            <span>Settings</span>
          </button>
        </nav>
      </aside>

      <div className="flex-1 px-8 py-6">
        {/* header */}
        <header className="flex items-center justify-between mb-6 ">
          <div>
            <h1 className="text-xl font-semibold text-slate-900 dark:text-white/90">
              Overview
            </h1>
            <p className="text-sm text-slate-500 dark:text-white/90">
              Manage your ecommerce store
            </p>
          </div>
          <DarkMode />
          <div className="flex items-center gap-6">
            <button className="relative w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 absolute -top-0.5 -right-0.5 border border-white" />
              🔔
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900 dark:text-white/90">
                  Admin User
                </p>
                <p className="text-xs text-slate-500 dark:text-white/90">
                  admin@store.com
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-300 dark:bg-white-900/95" />
            </div>
          </div>
        </header>

        {/* Overview */}
        {activeMenu === "overview" && (
          <>
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6 dark:text-white/90">
              <StatCard
                title="Total Revenue"
                value="$45,231"
                change="+12.5% from last month"
                changeColor="text-emerald-600"
                iconBg="bg-emerald-100"
                icon="💵"
              />
              <StatCard
                title="Total Orders"
                value="1,429"
                change="+8.2% from last month"
                changeColor="text-emerald-600"
                iconBg="bg-sky-100 dark:bg-gray-900/95"
                icon="📦"
              />
              <StatCard
                title="Active Customers"
                value="892"
                change="-2.1% from last month"
                changeColor="text-rose-600"
                iconBg="bg-purple-100 dark:bg-gray-900/95"
                icon="👥"
              />
              <StatCard
                title="Conversion Rate"
                value="3.24%"
                change="+0.5% from last month"
                changeColor="text-emerald-600"
                iconBg="bg-amber-100 dark:bg-gray-900/95"
                icon="📈"
              />
            </div>
            {/* cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-5 dark:bg-gray-900/95">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-slate-900 dark:text-white/90">
                    Revenue Chart
                  </h2>
                  <button className="text-xs text-sky-600 font-medium dark:text-white/90">
                    View All
                  </button>
                </div>
                <div className="space-y-3 text-sm">
                  {[
                    {
                      label: "December",
                      value: "$94,000",
                      color: "bg-indigo-500",
                    },
                    {
                      label: "November",
                      value: "$89,000",
                      color: "bg-emerald-500",
                    },
                    {
                      label: "October",
                      value: "$82,000",
                      color: "bg-amber-400",
                    },
                  ].map((item, index) => (
                    <div
                      className="flex items-center justify-between dark:text-white/90"
                      key={item.label}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-md text-xs font-semibold text-white dark:text-white/90 flex items-center justify-center ${item.color}`}
                        >
                          {index + 1}
                        </span>
                        <span className="text-slate-700 dark:text-white/90">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-slate-900 font-medium dark:text-white/90">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* activity now */}
              <div className="bg-white rounded-xl shadow-sm p-5 dark:bg-gray-900/95">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-slate-900  dark:text-white/90">
                    Recent Activity
                  </h2>
                  <button className="text-xs text-sky-600 font-medium dark:text-white/90">
                    View All
                  </button>
                </div>
                <div className="space-y-4 text-sm dark:text-white/90">
                  <ActivityItem
                    iconBg="bg-sky-100 text-sky-600"
                    title="New user registered"
                    time="2 minutes ago"
                  />
                  <ActivityItem
                    iconBg="bg-emerald-100 text-emerald-600"
                    title="Payment received"
                    time="15 minutes ago"
                  />
                  <ActivityItem
                    iconBg="bg-amber-100 text-amber-600"
                    title="System alert"
                    time="1 hour ago"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Products management */}
        {activeMenu === "products" && (
          <div className="bg-white rounded-xl shadow-sm p-5 dark:bg-gray-900/95">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white/90">
                Products
              </h2>
            </div>
            {/* Products control */}
            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
              >
                <FormField
                  control={form.control}
                  name="title"
                  rules={{ required: "Title is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Product title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  rules={{ required: "Price is required", min: 0 }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  rules={{ required: "Category is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input placeholder="Category" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="imageUrl"
                  rules={{ required: "Image URL is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="md:col-span-4 flex gap-3">
                  <Button
                    type="submit"
                    disabled={
                      createMutation.isPending || updateMutation.isPending
                    }
                  >
                    {IdRef.current ? "Update product" : "Add product"}
                  </Button>
                  {IdRef.current && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        IdRef.current = null;
                        form.reset();
                      }}
                    >
                      Cancel edit
                    </Button>
                  )}
                </div>
              </form>
            </Form>
            {/* Table */}
            <div className="overflow-x-auto rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={4} className="h-24 text-center">
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : products.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="h-24 text-center">
                        No products found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    products.map((p) => (
                      <TableRow key={p._id || p.id}>
                        <TableCell className="font-medium">{p.title}</TableCell>
                        <TableCell>{p.category}</TableCell>
                        <TableCell>${p.price}</TableCell>
                        <TableCell className="flex gap-2">
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(p)}
                          >
                            Edit
                          </Button>
                          <Button
                            type="button"
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteMutation.mutate(p._id || p.id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  changeColor: string;
  iconBg: string;
  icon: string;
};

const StatCard = ({
  title,
  value,
  change,
  changeColor,
  iconBg,
  icon,
}: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3 dark:bg-gray-900/95 dark:text-white/90">
      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500 font-medium dark:text-white/90">
          {title}
        </p>
        <div
          className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center text-lg dark:text-white/90`}
        >
          <span>{icon}</span>
        </div>
      </div>
      <p className="text-2xl font-semibold text-slate-900 dark:text-white/90">
        {value}
      </p>
      <p className={`text-xs font-medium ${changeColor} dark:text-white/90`}>
        {change}
      </p>
    </div>
  );
};

type Items = {
  iconBg: string;
  title: string;
  time: string;
};

const ActivityItem = ({ iconBg, title, time }: Items) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${iconBg} dark:text-white/90 dark:bg-GrayPrimary`}
      >
        ⓘ
      </div>
      <div>
        <p className="text-slate-800 text-sm dark:text-white/90">{title}</p>
        <p className="text-xs text-slate-500 dark:text-white/90">{time}</p>
      </div>
    </div>
  );
};

export default Dashboard;

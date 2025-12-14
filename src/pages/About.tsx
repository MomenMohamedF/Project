import Tap from "@/components/common/tap";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaRegGem } from "react-icons/fa6";
import { FiAward, FiHeadphones } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";
import { LuTruck } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";

const About = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900/95">
      <Tap pageName="About" />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Where Elegance Meets <span className="text-yellow-500">Craftsmanship</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover our story and passion for creating stunning accessories that inspire. Every piece tells a tale of dedication, artistry, and timeless beauty.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video md:aspect-square overflow-hidden rounded-xl shadow-2xl">
              <img
                src="./assets/images/About1.png"
                alt="Elegant Jewelry"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section2 */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yprimary">Meet Our Visionary</h2>
            <p className="text-muted-foreground">Behind every exceptional piece lies the passion and expertise of our founder</p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg border-none">
            <div className="flex flex-col md:flex-row items-center p-8 gap-8">
              <div className="flex-shrink-0 text-center">
                <Avatar className="w-40 h-40 border-4 border-yellow-500 shadow-md">
                  <AvatarImage src="./assets/images/About-leader.png" alt="Rosita Fileb" />
                  <AvatarFallback>RF</AvatarFallback>
                </Avatar>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold">Rosita Fileb</h3>
                  <p className="text-yellow-600 font-medium text-sm">Visionary Designer & Founder</p>
                </div>
                <div className="flex gap-2 justify-center mt-3">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">15+ Years Exp</Badge>
                     <Badge variant="outline" className="border-yellow-500 text-yellow-600">Luxury Expert</Badge>
                </div>
              </div>

              <div className="flex-1 space-y-6 text-center md:text-left">
                <blockquote className="italic text-lg text-foreground/80 border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-r">
                  "Passionate about blending tradition with innovation, I've dedicated my career to creating accessories that transcend trends and become timeless treasures."
                </blockquote>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With over 15 years of experience shaping the world of luxury wear, our founder brings unparalleled expertise and artistic vision to every creation.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-yellow-500">15+</span>
                    <span className="text-xs text-muted-foreground">Years Experience</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-yellow-500">500+</span>
                    <span className="text-xs text-muted-foreground">Designs Created</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-yellow-500">50+</span>
                    <span className="text-xs text-muted-foreground">Awards Won</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Section3 */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-600">Our Journey</h2>
          <p className="text-muted-foreground mt-2">Key milestones that define our commitment to quality and style</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-yellow-500">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                <MdOutlineRocketLaunch className="w-6 h-6" />
              </div>
              <CardTitle>Founded 2020</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm ">
                Our journey began with a vision to redefine accessory design and bring elegance to everyday life.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-yellow-500">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                <FaRegGem className="w-6 h-6" />
              </div>
              <CardTitle>First Collection 2021</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm ">
                Launched our debut line, celebrated for its unique craftsmanship and innovative design approach.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-yellow-500">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                <GoGlobe className="w-6 h-6" />
              </div>
              <CardTitle>Global Reach 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Expanded to international markets, bringing elegance worldwide and touching lives across continents.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/*Section4*/}
      <div className="bg-background py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-yellow-600">Why Choose Us</h2>
            <p className="text-muted-foreground mt-2">Experience luxury like never before with our carefully curated collection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 space-y-4">
              <div className="p-4 bg-yellow-50 rounded-full text-yellow-600 shadow-sm">
                <FiAward  className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Handcrafted with the finest materials and attention to detail</p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-4">
              <div className="p-4 bg-yellow-50 rounded-full text-yellow-600 shadow-sm">
                <LuTruck   className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Quick and secure shipping to your doorstep worldwide</p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-4">
              <div className="p-4 bg-yellow-50 rounded-full text-yellow-600 shadow-sm">
                <FiHeadphones  className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Dedicated customer service for all your needs</p>
            </div>
          </div>
        </div>
      </div>

      {/*Section5 */}
      <div className="relative py-24 bg-gradient-to-r from-red-900 to-red-800 text-white overflow-hidden">
         
         <div className="absolute inset-0 opacity-10 bg-[url('./assets/images/about3.png')]"></div>
         
        <div className="container relative mx-auto px-4 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Discover More?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Dive deeper into our world of exquisite accessories. Sign up for exclusive offers and updates.
          </p>

          <div className="flex justify-center gap-4 mb-10 text-white">
             
             <div className="bg-yellow-600/90 rounded-lg p-3 min-w-[70px]">
                <div className="text-2xl font-bold">47</div>
                <div className="text-xs uppercase">Hours</div>
             </div>
             <div className="bg-yellow-600/90 rounded-lg p-3 min-w-[70px]">
                <div className="text-2xl font-bold">23</div>
                <div className="text-xs uppercase">Minutes</div>
             </div>
             <div className="bg-yellow-600/90 rounded-lg p-3 min-w-[70px]">
                <div className="text-2xl font-bold">41</div>
                <div className="text-xs uppercase">Seconds</div>
             </div>
          </div>

          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
             <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-12 text-base">
                Explore Collection
             </Button>
             <div className="flex flex-1 gap-2">
                 <Input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="bg-transparent border-red-300 text-white placeholder:text-red-300 h-12"
                 />
                 <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-12">
                   Subscribe
                 </Button>
             </div>
          </div>
          <p className="mt-6 text-xs text-red-200 opacity-80">
              <span className="inline-block mr-1">🛡️</span> Secure checkout • Free shipping on orders over $100
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
export function FilterSidebar() {
  return (
    <aside className="lg:w-64 lg:pr-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Filters</h3>
            <Button variant="ghost" size="sm" className="text-sm">Clear all</Button>
        </div>
        <Accordion type="multiple" defaultValue={['status', 'category', 'price']} className="w-full">
          <AccordionItem value="status">
            <AccordionTrigger className="text-base font-medium">Status</AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue="all" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="s-all" />
                  <Label htmlFor="s-all">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="active" id="s-active" />
                  <Label htmlFor="s-active">Active</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sold" id="s-sold" />
                  <Label htmlFor="s-sold">Sold</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unsold" id="s-unsold" />
                  <Label htmlFor="s-unsold">Unsold</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="category">
            <AccordionTrigger className="text-base font-medium">Category</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="c-electronics" />
                  <Label htmlFor="c-electronics">Electronics</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="c-fashion" />
                  <Label htmlFor="c-fashion">Fashion</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="c-home" />
                  <Label htmlFor="c-home">Home & Garden</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="c-collectibles" />
                  <Label htmlFor="c-collectibles">Collectibles</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Slider defaultValue={[0, 5000]} max={5000} step={10} />
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="$0" className="w-1/2" />
                  <Input type="number" placeholder="$5000" className="w-1/2" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="brand">
            <AccordionTrigger className="text-base font-medium">Brand</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="b-apple" />
                  <Label htmlFor="b-apple">Apple</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="b-sony" />
                  <Label htmlFor="b-sony">Sony</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="b-nike" />
                  <Label htmlFor="b-nike">Nike</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="b-unbranded" />
                  <Label htmlFor="b-unbranded">Unbranded</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
}
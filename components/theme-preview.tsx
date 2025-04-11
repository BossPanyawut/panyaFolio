"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Moon, Sun, Monitor } from "lucide-react"

export function ThemePreview() {
  const { theme, setTheme } = useTheme()
  const [name, setName] = useState("")

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Theme Preview</h2>
          <p className="text-muted-foreground">
            Preview the light and dark themes and see how your content will look in different modes.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" onClick={() => setTheme("light")} className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            Light
          </Button>
          <Button variant="outline" onClick={() => setTheme("dark")} className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            Dark
          </Button>
          <Button variant="outline" onClick={() => setTheme("system")} className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            System
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Current Theme</CardTitle>
              <CardDescription>
                You are currently using the{" "}
                <Badge variant="outline" className="font-mono">
                  {theme}
                </Badge>{" "}
                theme.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The theme affects the appearance of components, text, and backgrounds throughout the application. You
                can change the theme using the buttons above or the theme toggle in the header.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary" className="ml-2">
                Secondary Button
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Theme Components</CardTitle>
              <CardDescription>Preview how different components look in the current theme.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
              </div>

              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 border rounded-md mt-2">
                  <p>This is the content for Tab 1.</p>
                </TabsContent>
                <TabsContent value="tab2" className="p-4 border rounded-md mt-2">
                  <p>This is the content for Tab 2.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Text Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-foreground">Default Text</p>
              <p className="text-muted-foreground">Muted Text</p>
              <p className="text-primary">Primary Text</p>
              <p className="text-secondary-foreground">Secondary Text</p>
              <p className="text-destructive">Destructive Text</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Background Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="p-2 rounded bg-background border">Background</div>
              <div className="p-2 rounded bg-muted">Muted</div>
              <div className="p-2 rounded bg-primary text-primary-foreground">Primary</div>
              <div className="p-2 rounded bg-secondary text-secondary-foreground">Secondary</div>
              <div className="p-2 rounded bg-accent text-accent-foreground">Accent</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

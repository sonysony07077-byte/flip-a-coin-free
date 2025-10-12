import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, GraduationCap, Calculator, Brain } from "lucide-react"
import { DownloadButton } from "./download-button"

export const metadata: Metadata = {
  title: "Classroom Activities & Teacher Resources | Flip A Coin Free",
  description:
    "Free classroom activities for teaching probability, statistics, and decision-making with coin flips. Download our teacher pack with 10 printable activities.",
  openGraph: {
    title: "Classroom Activities & Teacher Resources | Flip A Coin Free",
    description:
      "Free classroom activities for teaching probability, statistics, and decision-making with coin flips. Download our teacher pack with 10 printable activities.",
    url: "https://flipacoinfree.com/classroom",
    type: "website",
  },
}

const activities = [
  {
    title: "Probability Basics",
    description:
      "Introduce students to probability concepts using heads or tails experiments. Perfect for understanding random outcomes and coin toss basics.",
    grade: "Grades 3-5",
    subject: "Math",
  },
  {
    title: "Statistical Analysis",
    description:
      "Collect data from multiple coin flips and analyze patterns. Students learn about sample size, distribution, and the law of large numbers.",
    grade: "Grades 6-8",
    subject: "Statistics",
  },
  {
    title: "Decision Making Games",
    description:
      "Use coin flips for classroom games and activities. Teach students about fair decision-making and random selection methods.",
    grade: "All Grades",
    subject: "Social Studies",
  },
  {
    title: "Experimental Design",
    description:
      "Design experiments using the weighted coin simulator to understand bias and fairness in random events.",
    grade: "Grades 9-12",
    subject: "Science",
  },
  {
    title: "Data Collection & Graphing",
    description:
      "Use the multi-flip tool to generate large datasets. Students practice creating charts and graphs from real coin flip data.",
    grade: "Grades 4-8",
    subject: "Math",
  },
  {
    title: "Critical Thinking",
    description:
      "Discuss the difference between true randomness and perceived patterns. Great for teaching about cognitive biases.",
    grade: "Grades 7-12",
    subject: "Psychology",
  },
]

const features = [
  {
    icon: BookOpen,
    title: "10 Ready-to-Use Activities",
    description: "Printable worksheets covering probability, statistics, and decision-making across all grade levels.",
  },
  {
    icon: Calculator,
    title: "Math Standards Aligned",
    description: "Activities aligned with Common Core and state math standards for probability and statistics.",
  },
  {
    icon: Users,
    title: "Group & Individual Work",
    description: "Flexible activities that work for whole class instruction, small groups, or independent practice.",
  },
  {
    icon: Brain,
    title: "Critical Thinking Focus",
    description: "Develop analytical skills through hands-on experiments with our virtual coin flip tool.",
  },
]

export default function ClassroomPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://flipacoinfree.com" },
          { name: "Classroom", url: "https://flipacoinfree.com/classroom" },
        ]}
      />

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Classroom Activities & Teacher Resources</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Free resources for teaching probability, statistics, and decision-making with our online coin flip tool.
            Perfect for virtual coin toss experiments and heads or tails activities in the classroom.
          </p>
        </div>

        {/* Download CTA */}
        <Card className="mb-16 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Free Classroom Activity Pack</CardTitle>
            <CardDescription className="text-base">
              Download our comprehensive teacher pack with 10 printable activities, answer keys, and implementation
              guides for using coin flip activities in your classroom.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <DownloadButton />
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Use Coin Flips in the Classroom?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Activities List */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Sample Activities Included</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <Card key={activity.title}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded">{activity.grade}</span>
                    <span className="px-2 py-1 bg-muted rounded">{activity.subject}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Use Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">How to Use Our Coin Flip Tool in Your Classroom</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Single Coin Flip Mode</h3>
              <p className="text-muted-foreground">
                Perfect for quick demonstrations and individual student practice. Use the spacebar for easy flipping
                during lessons. Great for teaching basic heads or tails concepts and coin toss fundamentals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Multi-Flip Tool</h3>
              <p className="text-muted-foreground">
                Generate large datasets instantly for statistical analysis. Students can flip 100, 500, or even 1000
                coins at once to see probability in action with our online coin flip simulator.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Custom Coin Designer</h3>
              <p className="text-muted-foreground">
                Let students create their own coins with custom text and images. Try flipping different currency coins
                like dollar coin flip, euro coin flip, or rupee coin flip for international lessons.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">4. Weighted Coin Simulator</h3>
              <p className="text-muted-foreground">
                Demonstrate bias and fairness by adjusting the probability. Perfect for advanced statistics and
                experimental design lessons using our virtual coin tool.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">5. Export & Analyze Data</h3>
              <p className="text-muted-foreground">
                Students can export their flip history as CSV files for further analysis in spreadsheet software or
                graphing calculators. Track coin toss results over time.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits for Teachers & Students</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>For Teachers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ No setup or cleanup required - instant coin flipper access</li>
                  <li>✓ Works on any device with internet access</li>
                  <li>✓ Free to use with no registration needed</li>
                  <li>✓ Embeddable in Google Classroom or LMS</li>
                  <li>✓ Accessible for all students (WCAG compliant)</li>
                  <li>✓ Perfect for remote and hybrid learning</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>For Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Engaging and interactive learning experience</li>
                  <li>✓ Visual and auditory feedback for better understanding</li>
                  <li>✓ Hands-on practice with probability concepts</li>
                  <li>✓ Real-time results and data collection</li>
                  <li>✓ Works on phones, tablets, and computers</li>
                  <li>✓ Fun way to learn about randomness and chance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Standards Alignment */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Standards Alignment</CardTitle>
            <CardDescription>Our activities align with Common Core State Standards for Mathematics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <strong>CCSS.MATH.CONTENT.7.SP.C.5:</strong> Understand that the probability of a chance event is a number
              between 0 and 1
            </div>
            <div>
              <strong>CCSS.MATH.CONTENT.7.SP.C.6:</strong> Approximate the probability of a chance event by collecting
              data
            </div>
            <div>
              <strong>CCSS.MATH.CONTENT.7.SP.C.7:</strong> Develop a probability model and use it to find probabilities
              of events
            </div>
            <div>
              <strong>CCSS.MATH.CONTENT.HSS.MD.A.1:</strong> Define a random variable for a quantity of interest
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Download our free classroom pack and start using our quick coin flip tool in your lessons today. Join
            thousands of teachers using Flip A Coin Free for engaging probability lessons.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <DownloadButton />
            <DownloadButton variant="outline" href="/contact" text="Contact Us for Support" />
          </div>
        </div>
      </div>
    </>
  )
}

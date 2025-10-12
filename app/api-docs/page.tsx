import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Developer API Documentation | Flip A Coin Free",
  description: "Free REST API for coin flips. Simple, fast, and reliable. No authentication required for basic usage.",
}

export default function APIDocsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="font-display text-4xl font-bold md:text-5xl">Developer API</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Free REST API for coin flips. Simple, fast, and reliable. Perfect for apps, games, and automation.
        </p>
      </div>

      {/* Quick Start */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Quick Start</CardTitle>
          <CardDescription>Get started in seconds with our simple API</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Base URL</p>
              <code className="block bg-muted p-3 rounded-lg text-sm">https://flipacoinfree.com/api</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Simple GET Request</p>
              <code className="block bg-muted p-3 rounded-lg text-sm">curl https://flipacoinfree.com/api/flip</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Response</p>
              <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
                <code>{`{
  "success": true,
  "data": {
    "result": "heads",
    "timestamp": "2025-01-10T12:00:00.000Z"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Endpoints */}
      <div className="space-y-6">
        <h2 className="font-display text-3xl font-bold">API Endpoints</h2>

        {/* Single Flip */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                GET
              </Badge>
              <CardTitle className="font-mono text-lg">/api/flip</CardTitle>
            </div>
            <CardDescription>Flip a single coin</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Example Request</p>
              <code className="block bg-muted p-3 rounded-lg text-sm">curl https://flipacoinfree.com/api/flip</code>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Response</p>
              <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
                <code>{`{
  "success": true,
  "data": {
    "result": "heads",
    "timestamp": "2025-01-10T12:00:00.000Z"
  }
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Multi Flip */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                POST
              </Badge>
              <CardTitle className="font-mono text-lg">/api/flip</CardTitle>
            </div>
            <CardDescription>Flip multiple coins with optional weighting</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Request Body</p>
              <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
                <code>{`{
  "count": 10,           // Number of flips (1-1000)
  "weighted": false,     // Use weighted probability
  "probability": 50      // Heads probability (0-100)
}`}</code>
              </pre>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Example Request</p>
              <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
                <code>{`curl -X POST https://flipacoinfree.com/api/flip \\
  -H "Content-Type: application/json" \\
  -d '{"count": 10}'`}</code>
              </pre>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Response</p>
              <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
                <code>{`{
  "success": true,
  "data": {
    "flips": ["heads", "tails", "heads", ...],
    "count": 10,
    "heads": 6,
    "tails": 4,
    "headsPercent": "60.00",
    "tailsPercent": "40.00",
    "timestamp": "2025-01-10T12:00:00.000Z"
  }
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Code Examples */}
        <div>
          <h2 className="font-display text-3xl font-bold mb-6">Code Examples</h2>
          <Tabs defaultValue="javascript" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="php">PHP</TabsTrigger>
              <TabsTrigger value="curl">cURL</TabsTrigger>
            </TabsList>

            <TabsContent value="javascript" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`// Single flip
const response = await fetch('https://flipacoinfree.com/api/flip');
const data = await response.json();
console.log(data.data.result); // "heads" or "tails"

// Multiple flips
const multiResponse = await fetch('https://flipacoinfree.com/api/flip', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ count: 10 })
});
const multiData = await multiResponse.json();
console.log(multiData.data.flips);`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="python" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`import requests

# Single flip
response = requests.get('https://flipacoinfree.com/api/flip')
data = response.json()
print(data['data']['result'])

# Multiple flips
multi_response = requests.post(
    'https://flipacoinfree.com/api/flip',
    json={'count': 10}
)
multi_data = multi_response.json()
print(multi_data['data']['flips'])`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="php" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`<?php
// Single flip
$response = file_get_contents('https://flipacoinfree.com/api/flip');
$data = json_decode($response, true);
echo $data['data']['result'];

// Multiple flips
$options = [
    'http' => [
        'method' => 'POST',
        'header' => 'Content-Type: application/json',
        'content' => json_encode(['count' => 10])
    ]
];
$context = stream_context_create($options);
$multi_response = file_get_contents(
    'https://flipacoinfree.com/api/flip',
    false,
    $context
);
$multi_data = json_decode($multi_response, true);
print_r($multi_data['data']['flips']);
?>`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curl" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`# Single flip
curl https://flipacoinfree.com/api/flip

# Multiple flips
curl -X POST https://flipacoinfree.com/api/flip \\
  -H "Content-Type: application/json" \\
  -d '{"count": 10}'

# Weighted flip
curl -X POST https://flipacoinfree.com/api/flip \\
  -H "Content-Type: application/json" \\
  -d '{"count": 100, "weighted": true, "probability": 70}'`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Rate Limits */}
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-2xl">Rate Limits</CardTitle>
            <CardDescription>Fair usage policy for API requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border p-4">
                  <p className="text-2xl font-bold text-primary">100</p>
                  <p className="text-sm text-muted-foreground">Requests per minute (free tier)</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-2xl font-bold text-primary">10,000</p>
                  <p className="text-sm text-muted-foreground">Requests per day (free tier)</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Need higher limits? Contact us for enterprise pricing and dedicated infrastructure.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

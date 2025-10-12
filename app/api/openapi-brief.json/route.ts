import { NextResponse } from "next/server"

export async function GET() {
  const openapiBrief = {
    openapi: "3.0.0",
    info: {
      title: "FlipACoinFree API (brief)",
      version: "1.0.0",
      description: "API for performing and logging coin flips.",
      contact: {
        email: "partnerships@flipacoinfree.com",
      },
    },
    servers: [
      {
        url: "https://flipacoinfree.com",
        description: "Production server",
      },
    ],
    paths: {
      "/api/flip": {
        post: {
          summary: "Flip a coin",
          description: "Perform a single or multiple coin flips",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    coinId: {
                      type: "string",
                      description: "ID of the coin to flip (e.g., 'usd', 'eur', 'gold')",
                      example: "usd",
                    },
                    count: {
                      type: "integer",
                      description: "Number of flips to perform",
                      minimum: 1,
                      maximum: 1000,
                      example: 1,
                    },
                  },
                },
              },
            },
          },
          responses: {
            "200": {
              description: "Flip result",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      result: {
                        type: "string",
                        enum: ["heads", "tails"],
                      },
                      timestamp: {
                        type: "string",
                        format: "date-time",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/stats": {
        get: {
          summary: "Get flip statistics",
          description: "Retrieve global flip statistics",
          responses: {
            "200": {
              description: "Statistics data",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      total_flips: {
                        type: "integer",
                        description: "Total number of flips performed",
                      },
                      today_flips: {
                        type: "integer",
                        description: "Number of flips today",
                      },
                      active_users: {
                        type: "integer",
                        description: "Currently active users",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }

  return NextResponse.json(openapiBrief, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}

/**
 * Client-side Rate Limiter
 * Prevents accidental spam and double-posting
 */

interface RateLimitConfig {
  maxRequests: number
  windowMs: number
}

class RateLimiter {
  private requests: Map<string, number[]> = new Map()

  /**
   * Check if action is allowed
   */
  isAllowed(key: string, config: RateLimitConfig): boolean {
    const now = Date.now()
    const requests = this.requests.get(key) || []

    // Filter out old requests outside the window
    const recentRequests = requests.filter((timestamp) => now - timestamp < config.windowMs)

    if (recentRequests.length >= config.maxRequests) {
      return false
    }

    // Add current request
    recentRequests.push(now)
    this.requests.set(key, recentRequests)

    return true
  }

  /**
   * Clear rate limit for a key
   */
  clear(key: string): void {
    this.requests.delete(key)
  }
}

export const rateLimiter = new RateLimiter()

/**
 * Debounce function for performance
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function for performance
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle = false

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

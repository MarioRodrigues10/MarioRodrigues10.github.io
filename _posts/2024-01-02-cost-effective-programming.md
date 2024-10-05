---
layout: post
title: Cost Effective Programming
date: 2024-01-02 20:39:17.000000000 -03:00
type: post
published: true
status: publish
keywords: performance memory rust golang java c# python nodejs elixir
slug: Cost-Effective-Programming
---

## Introduction
Optimizing code efficiency is not only a best practice for creating robust and responsive software but also a strategic imperative for cost-effective development. By enhancing the performance of your code, you can directly impact infrastructure costs, resource utilization, and overall system efficiency. This optimization not only leads to a more responsive and scalable application but can also translate into significant savings in terms of cloud hosting, operational expenses, and hardware requirements. In this guide, we'll explore various tips and coding practices that empower developers to streamline their code, maximize resource utilization, and ultimately reduce associated expenses.

## Code Improvements

### 1. Use the Right Data Structures
Choose algorithms with lower time complexity for critical operations.
Consider data structures that are more efficient for the tasks at hand.
##### Examples: 
###### Using a Map for Fast Key Lookup
```elixir
map = %{"apple" => 1, "orange" => 2, "banana" => 3}
value = Map.get(map, "orange")
```

###### Finding Median
```elixir
defmodule FindingMedian do
  def find_median_sorted_arrays1(nums1, nums2) do
    nums3 = (nums1 ++ nums2) |> Enum.sort
    if rem(length(nums3), 2) == 1 do
        Enum.at(nums3, trunc(length(nums3)/2))
    else
        num1 = Enum.at(nums3, trunc(length(nums3)/2))
        num2 = Enum.at(nums3, trunc(length(nums3)/2)-1)
        (num1+num2)/2
    end
  end

  def find_median_sorted_arrays2(nums1, nums2) do
    nums3 = (nums1 ++ nums2) |> Enum.sort
    if rem(length(nums3), 2) == 1 do
        Enum.at(nums3, trunc(length(nums3)/2))
    else
        middle = trunc(length(nums3)/2)
        num1 = Enum.at(nums3, middle)
        num2 = Enum.at(nums3, middle-1)
        (num1+num2)/2
    end
  end

  def find_median_sorted_arrays3(nums1, nums2) do
    nums3 = (nums1 ++ nums2) |> Enum.sort
    size = length(nums3)
    if rem(size, 2) == 1 do
        Enum.at(nums3, trunc(size/2))
    else
        middle = trunc(size/2)
        num1 = Enum.at(nums3, middle)
        num2 = Enum.at(nums3, middle-1)
        (num1+num2)/2
    end
  end
end
```
In the code above, with 3 different versions for the same code, i saved 75ms for a 5000000 integer elements list input between the first and the last version. The first version is the most naive one, the second one is a little bit better, and the last one is the best one. The difference between the first and the last one is the use of a variable to store the length of the array. This way, we don't have to calculate the length of the array every time we need it.

### 2. Code Profiling and Optimization
Regularly profile your code to identify performance bottlenecks.
Focus optimization efforts on the most time-consuming parts of your code.
##### Examples:
###### Using :telemetry to Profile Function Execution Time
```elixir
:telemetry.attach("my_app_profile", [:my_module, :my_function], &MyProfiler.profile/3)
```

### 3. Lazy Loading and Deferred Execution
Implement lazy loading and deferred execution for resources and operations that are not immediately needed.
Load data or execute operations only when necessary to conserve resources.
##### Examples:
###### Using Stream to Lazily Load Data
```elixir
data_stream = Stream.resource(fn -> File.stream!("large_file.txt") end, &IO.read/1, close: &File.close/1)
```

### 4. Caching Strategies
Implement caching mechanisms to store and reuse frequently requested data.
Use caching for computations or results that do not change frequently.

### 5. Database Optimization
Optimize database queries by indexing columns and avoiding unnecessary joins.
Consider denormalization for read-heavy operations.
Use connection pooling to efficiently manage database connections.
##### Examples:
###### Using Ecto with Indexing to Optimize Database Queries
```elixir
query = from(u in User, where: u.age > 21, order_by: [asc: u.name], select: u)
Repo.all(query)
```
###### Ecto Async Queries with Task
```elixir
# Example: Ecto Async Queries with Task
task = Task.async(fn ->
  Repo.all(from u in User, where: u.age > 21)
end)

result = Task.await(task)
```

### 6. Parallelism and Concurrency
Utilize parallel processing and concurrency to execute tasks concurrently when applicable.
Take advantage of multi-core architectures to improve performance.
##### Examples:
###### Using Task to Execute Tasks Concurrently
```elixir
task1 = Task.async(fn -> expensive_operation_1() end)
task2 = Task.async(fn -> expensive_operation_2() end)
{result1, result2} = {Task.await(task1), Task.await(task2)}
```

### 8. Minimize Network Requests
Reduce the number of external API calls and network requests.
Implement batch processing for multiple requests to minimize the overhead of establishing connections.
##### Examples:
###### Using HTTPoison to Batch Requests
```elixir
tasks = Enum.map(urls, fn url -> Task.async(fn -> HTTPoison.get(url) end) end)
responses = Enum.map(tasks, &Task.await/1)
```

### 10. Optimize Frontend Assets
Compress and minify CSS, JavaScript, and other frontend assets.
Use content delivery networks (CDNs) to distribute static assets globally.
##### Examples:
###### Using Webpack to Minify JavaScript
Webpack can be configured to compress and minify frontend assets


### 11. Memory Management
Efficiently manage memory usage by releasing unused objects and avoiding memory leaks.
Use appropriate data structures to minimize memory overhead.
##### Examples:
###### Process Registry for Resource Cleanup
```elixir
:global.register_name(:my_resource, self())
:global.unregister_name(:my_resource)
```

### 12. Implement automated testing to catch performance issues early in development.
Regularly profile and benchmark your code to ensure ongoing optimization.
##### Examples:
###### Using ExUnit to Test for Performance
```elixir
defmodule MyModuleTest do
  use ExUnit.Case

  test "should perform efficiently" do
    # Perform tests to ensure efficient code execution
  end
end
```

## Let's break this into numbers
Now, let's break down the calculations for potential cost savings using AWS as an example. Please note that the actual cost structure may vary based on specific AWS services you are using and the pricing model applicable to those services.

Let's assume the original response time (ORT) is 10 milliseconds, and the improved response time (IRT) is 9.6 milliseconds (10 - 0.4).

#### Calculate the Number of Requests per Hour:

For the original response time (ORT):
- Requests per Hour (ORT) = (3600 seconds) / (10 milliseconds / 1000) * 1000 = 360,000 requests/hour

For the improved response time (IRT):
- Requests per Hour (IRT) = (3600 seconds) / (9.6 milliseconds / 1000) * 1000 = 375,000 requests/hour

#### Determine the Cost per Request:

Let's say it's $0.000001 per request.

#### Calculate the Cost Savings per Request:

Cost Savings per Request = (10 - 9.6) * $0.000001 = $0.0000004

#### Calculate the Total Cost Savings per Hour:

Total Cost Savings per Hour = $0.0000004 * 360,000 = $0.144

#### Calculate the Total Cost Savings per Year:

Total Cost Savings per Year = $0.144 * 24 hours * 365 days = $1261.44

So, in this simplified example, improving the response time by 0.4 milliseconds could potentially save $0.144 per hour for 1000 requests. Keep in mind that these numbers are illustrative, and actual costs will depend on your specific AWS services and pricing. Always refer to the latest AWS pricing documentation for accurate and up-to-date information.
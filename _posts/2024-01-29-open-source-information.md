---
layout: post
title: From OSInt to your own Database
comments: true
keywords: OSInt, database, security, privacy, information, collection, data
excerpt_separator: <!--more-->
---

## Introduction
First of all, you may all ask what is <b>OSInt</b>? <b>OSInt</b> is the process of collecting information about a target through publicly available information. 
This information can be used to perform a cyber attack or to perform a social engineering attack.

This article isn't an instruction on how to perform a cyber attack or social engineering attack, but rather a guide on how to collect information about a target.

## What is a target?
A target can be a person, a company, a website, a server, a network, or anything that you want to collect information about.

## What is publicly available information?
Publicly available information is any information that is available to the public. This information can be found on the internet, in the news, in the phone book, or anywhere else that is available to the public.

## How to collect information about a target?
There are several ways to collect information about a target. 
The common ways are:
- Search engines
- Social media
- News
- Phone book
- Public records
- Public databases
- Public forums
- Public Websites
- Public APIs

Instead of going through each of these methods, I will show you how to use them in a real life example.

<b>Disclaimer:</b> Any of the sites mentioned in this article are not affiliated with me in any way, and I am not responsible for any of the information that you may find on them.


Let's start, I will show you how to collect information about a target, with 3 different examples, with 3 different types of information.

### Example 1
For this example we will use the target <b>John Doe</b>, and let's assume that i know him from Boston, MA.

I would start by using <a href="truthfinder.com">truthfinder.com</a> to search for the target, in this website you can specify the city and state to narrow down the search results.

This website will list a bunch of individuals with the name John Doe in Boston, MA, with some information about them like their age, relatives, and phone number.

Then you can choose the target that you are looking for, and it will give you more information about them such as <b>their full  list of criminal records, their social media accounts, their email address, and their address history</b>.

Based on the information mentioned above, you can now search for the target on social media, and you can also search for their email address on google to find more information about them.

There are several other websites that you can use to collect information about a target, such as <a href="https://www.beenverified.com/">beenverified.com</a>, <a href="https://www.intelius.com/">intelius.com</a>, <a href="https://www.instantcheckmate.com/">instantcheckmate.com</a>, and <a href="https://www.spokeo.com/">spokeo.com</a>.


### Example 2

For this example we will use the target <b>John Doe</b>, aswell, but this time let's assume that i only know his email address that is <b>johndoe@gmail.com</b>.

I would start by using <a href="https://www.epieos.com/">epieos.com</a> to search for the specified email address, this website will list a bunch of websites that are associated with the email address, and it will also list the social media accounts that are associated with the email address.

In case you want to store the information that you found, you can download the results as a CSV or JSON file, and insert them into a database, with a simple association.

```sql
CREATE TABLE UserData (
    email VARCHAR(255) PRIMARY KEY,
    websites TEXT,
    social_media_profiles TEXT,
    additional_info TEXT
);
```
so you can query them later, like this:

```sql
SELECT * FROM UserData WHERE email = 'johndoe@gmail.com';
```

<b>Epieos</b> also return a valuable information, which is if you have been pwned or not, and if you have been pwned, it will list the websites that you have been pwned on.



### Example 3

For this example we will use the target <b>John Doe</b>, aswell, but this time let's assume that i only know his phone number that is <b>555-555-5555</b>.

I would start by using <a href="https://www.spydialer.com/">spydialer.com</a> to search for the specified phone number, this website will list a bunch of individuals with the name John Doe, with some information about them like their age, relatives, and address.

Then you can choose the target that you are looking for, and it will give you more information about them such as <b>their social media accounts, their email address, and their address history</b>.

Based on the information mentioned above, you can now search for the target on social media, and you can also search for their email address on google to find more information about them.


## Can I protect myself from OSInt?
Well, the short answer is <b>no</b>, you can't protect yourself from OSInt, but <b>you can make it harder for someone to collect information about you</b>.

<b>How can you make it harder?</b> 
- Use pseudonyms instead of your real name whenever it is possible.
- Be mindful of what sensitive information you share online, such as your phone number, credit card number, and address.
- Monitor your presence on the internet, by searching for your name, email address, and phone number with some of the websites mentioned above.
- Be skeptical of any emails, phone calls, or text messages that you receive from unknown sources.

## Conclusion

The intention of this article isn't to teach or hurt anyone, but rather to show you how easy it is to collect information about a target, and how to protect yourself from it.

In this article, I showed you how to collect information about a target, and save it for later use, and how to protect yourself from OSInt.
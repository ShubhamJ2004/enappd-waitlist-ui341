- Name: Shubham Jangid
- Email: your-email@gmail.com

# Enappd Frontend Internship Assessment - Waitlist UI

This project is created as part of the Enappd Frontend Internship Evaluation.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Features Implemented
- Waitlist UI with clean centered card layout
- Form with Name and Email input fields
- Manual form validation (without using HTML required attribute)
- Error messages shown for invalid inputs
- Gmail addresses are not allowed
- Email domain name length is restricted to maximum 10 characters
- On successful submission, form is replaced with success message
- Fully responsive UI

## Validation Rules
- Name is required
- Email is required
- Email must be valid format
- Email must not end with `@gmail.com`
- Domain name (before the first dot) must be max 10 characters

Example:
- `abc@enappd.com` ✅ valid
- `abc@gmail.com` ❌ not allowed
- `abc@verylongdomain.com` ❌ domain length > 10

## Assumptions
- Domain name is considered the part after `@` and before the first `.`  
  Example: `user@company.com` → domain name = `company`

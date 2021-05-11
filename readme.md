# Prullenbackvaccin Checker
This repo contains a Github Actions workflow that will check if there are any lefover vaccines nearby.

So how does it work? Well the workflow will check every 15 minutes if any vaccines nearby are available. If no vaccines are available, the workflow will pass. The moment the workflow detects there is a vaccine available nearby it will fail the workflow and you will receive an email from Github.

It's easy and very lightweight to run, check it out.

## Setup
### Step 1: create repository
Go to the [repo main page](https://github.com/m4lloc/prullenbakvaccin-checker) and hit the green `Use this template` button. Enter a `Repository name` and set it to `Private`, for privacy reasons. Next you need to hit the big green button `Create repository from template`.

### Step 2: change location
Now we just need to update the location we need to check. Go edit the `cypress.json` file and enter your location. Commit your changes directly to `master` and now all you have to do is wait until you get an email from Github that the workflow has failed.

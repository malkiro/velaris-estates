# Velaris Estates

## Project Setup

### NextJS

1. Clone this repo
2. Run `npm i`
3. Run `npm outdated` to check for the packages that needs to be updated
4. Run `npm update --save` to update all the dependencies and save the new versions in package.json file
5. Or, if some updates are unstable, use `npm update {package}` to update individually

### Project Structure

#### Adding reusable page types

1. If you do not need reusable page types, please delete the PaginatedList slice
2. To add a blog -> `npm run add` -> Select "Blog" -> Add the details
3. To add another reusable page -> `npm run add` -> Select "Reusable page" -> Add the details

### Prismic Setup

1. Home page -> Next.js -> Connect your own web app
2. Add missing details, Select Free and click on "Create repository"
3. Pick the main language
4. Click on "Get started with Slicemachine"
5. Click on "I already have a project"
6. Open the project folder in a terminal and run `npx @slicemachine/init@latest --repository {prismicRepoName}`. Since you are in the repo, you can simply copy the command in the screen and run it. You will be asked to press any key to open the browser and login to Prismic.
7. If you are already logged in to another Prismic account, run `prismic logout`. If you do not have the Prismic CLI installed, run `npm install -global prismic-cli`. Then run the above command again.
8. You can exit the process by clicking on "I've pushed my models"

### Running the project locally

1. Log in to the Prismic account and add the Home Page **MAKE SURE TO USE "home" AS THE Slug OF THE HOME PAGE**
2. Add other required pages
3. Add Settings and Navigation
4. Make sure to publish all the documents - the published pages are marked in Green.
5. Run `npm run dev` to start the [Project](http://localhost:1204) and the [Slice Machine](http://localhost:1203)

## Variables

1. Update the variables in `tailwind.config.js`
2. Update the text styles in `app/global.scss`

### Prismic Docs to refer

- [Prismic Next Image](https://prismic.io/docs/image)
- [Prismic Rich Text](https://prismic.io/docs/rich-text)
- [Route Resolver](https://prismic.io/docs/route-resolver)
- [Fetch Data](https://prismic.io/docs/fetch-data-nextjs)

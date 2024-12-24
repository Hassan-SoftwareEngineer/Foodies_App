import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsHelper from "@/components/MealsHelper";
export default async function Meals () {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1 className={classes.highlight}> Delicious meals, created <span > by you </span></h1>
        <p> Choose your favorite recipe and cook it yourself. It is easy and Fun ! </p>
        <p className={classes.cta}> 
          <Link href = "/meals/share">
          share your favorite recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback = {<p className={classes.loading}> Fetching Meals, Please Wait ..... </p>}>
        <MealsHelper />
        </Suspense>
      </main>
    </React.Fragment>
  )
}

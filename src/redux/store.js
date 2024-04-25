import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/produtsSlice";
import categories from "./slices/homeCateogrySlice";
import categoryCases from "./slices/categoryShowCaseSlice";
import locations from "./slices/locationsSlice";
import aboutUs from "./slices/aboutUsSlice";
import sponsors from "./slices/sponsorsSlice";
import contacts from "./slices/contactsSlice";
import about from "./slices/aboutSlice";
import socialMedia from "./slices/socialMediaSlice";
import postsTags from "./slices/postsTagsSlice";
import blogs from "./slices/blogSlice";

export const store = configureStore({
  reducer: {
    products,
    categories,
    categoryCases,
    locations,
    aboutUs,
    sponsors,
    contacts,
    about,
    socialMedia,
    postsTags,
    blogs,
  },
});

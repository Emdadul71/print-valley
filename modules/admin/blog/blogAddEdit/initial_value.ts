import moment from "moment";

export const initialValue = {
  title: "",
  subtitle: "",
  date: new Date(moment().format("YYYY-MM-DD")),
  slug: "",
  status: "ACTIVE",
  featuredImage: "",
  posterImage: "",
  description: "",
  categories: [],
  isFeatured: false,
  metaTitle: "",
  metaDescription: "",
};

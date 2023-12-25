import mongoose from "mongoose";

const CategorieSchema = mongoose.Schema(
  {
    title: String,
    image: String,
    articles: [
      {
        title: String,
        price: Number,
        mainImage: String,
        images: [
          {
            type: String,
          },
        ],
        stock: {
          existing: Boolean,
          num: Number,
        },
        sizeInStock: {
          existing: Boolean,
          num: {
            s: Number,
            m: Number,
            l: Number,
            xl: Number,
            xxl: Number,
          },
        },
        pointureInStock: {
          existing: Boolean,
          num: {
            point35: Number,
            point36: Number,
            point37: Number,
            point38: Number,
            point39: Number,
            point40: Number,
            point41: Number,
            point42: Number,
            point43: Number,
            point44: Number,
            point45: Number,
          },
        },
      },
    ],
  },
  { timestamps: true }
);

const Categorie =
  mongoose.models.Categories || mongoose.model("Categories", CategorieSchema);

export default Categorie;

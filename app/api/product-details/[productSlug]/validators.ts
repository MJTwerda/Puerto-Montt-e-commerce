import { Product } from "@/interfaces/product";

export const validateProduct = (productData: Product) => {
  const requiredFields = [
    "name",
    "images",
    "description",
    "price",
    "category",
    "inStock",
    "slug",
    "status",
  ];
  const missingFields = requiredFields.filter(
    (field) => !(field in productData)
  );
  if (missingFields.length > 0) {
    return {
      ok: 0,
      message: `Faltan campos requeridos: ${missingFields.join(", ")}`,
    }
  } else return { ok: 1, message: 'Valid product info' }
};

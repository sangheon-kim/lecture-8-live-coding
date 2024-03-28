"use server";

import { postService } from "@/api/services";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const rawFormData = {
    content: formData.get("content"),
  };
  await postService.createPost({
    text: rawFormData.content?.toString(),
    owner: "60d0fe4f5311236168a109ca",
    tags: ["Elice 8기", "여러분들", "싸랑해요", "연예가중계"],
  });

  formData.delete("content");

  revalidatePath("/");
}

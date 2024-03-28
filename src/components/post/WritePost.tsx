import React from "react";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import { createPost } from "@/app/actions";
import { postService } from "@/api/services";
import { revalidatePath } from "next/cache";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";

const Wrapper = styled.section``;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  background-color: #1b2730;
  gap: 8px;
`;

const Thumbnail = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex: 1 auto;
`;

const Input = styled.input`
  outline: none;
  border: none;
  flex: 1 auto;
  padding: 8px 16px;
  background-color: #28343e;
  border-radius: 8px;
  color: #ffffff;

  &:focus {
    border: 1px solid #ffffff;
  }
`;

const ButtonGroup = styled.div``;

const IconButton = styled.button``;

export const WritePost = () => {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<{
    content: string;
  }>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(
      yup.object().shape({
        content: yup
          .string()
          .required("내용을 입력해주세요")
          .max(10, "10자 이내로 작성해주세요"),
      })
    ),
  });
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const createPostMutation = useMutation({
    mutationFn: postService.createPost,
    onMutate() {
      setLoading(true);
    },
    onSettled() {
      setLoading(false);
    },
    onSuccess() {
      form.reset({
        content: "",
      });
    },
    onError(error, variables) {
      console.error(error);
      alert("에러가 발생했습니다.");
    },
  });

  // const onSubmit = form.handleSubmit((data) => {
  //   createPostMutation.mutate({
  //     text: data.content,
  //     owner: "60d0fe4f5311236168a109ca",
  //   });
  // });

  // console.log(form.formState.isValid);
  return (
    <Wrapper>
      <Form action={createPost}>
        <Thumbnail src={"https://picsum.photos/200/200"} alt={"profile"} />
        <InputWrapper>
          <Input type={"text"} name={"content"} id={"content"} />
          <ButtonGroup>
            <IconButton onClick={handleRemove}>
              <IoIosCloseCircle color={"#ffffff"} size={24} />
            </IconButton>
          </ButtonGroup>
        </InputWrapper>
        {/* <Controller
          control={form.control}
          name={"content"}
          render={({ field: { ref, ...rest }, fieldState }) => {
            return (
              <React.Fragment>
                <InputWrapper>
                  <Input
                    {...rest}
                    type={"text"}
                    name={"content"}
                    id={"content"}
                    ref={ref}
                  />
                  <ButtonGroup>
                    <IconButton onClick={handleRemove}>
                      <IoIosCloseCircle color={"#ffffff"} size={24} />
                    </IconButton>
                  </ButtonGroup>
                </InputWrapper>
                {fieldState.error?.message && <p>{fieldState.error.message}</p>}
              </React.Fragment>
            );
          }}
        /> */}
      </Form>
    </Wrapper>
  );
};

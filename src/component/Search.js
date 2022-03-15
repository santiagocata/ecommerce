import { Stack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

import axios from "axios";
import {useState } from "react";

import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  function useInput() {
    function onChange({ target }) {
      setValue(target.value);
    }
    return { onChange, value };
  }

  const search = useInput();

  const handleSearch = function (e) {
    if (e.key === "Enter") {
      axios.post("/products/by/name", { name: value }).then((response) => {
        navigate("/search", { state: response.data });
        setValue("");
      });
    }
  };

  return (
    <Stack
      flex={{ base: 1, md: 1 }}
      justify={"flex-end"}
      direction={"row"}
      pr={6}
      pl={6}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="tel"
          placeholder="Search by product"
          onKeyDown={handleSearch}
          {...search}
        />
      </InputGroup>
    </Stack>
  );
}

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMyPage } from "../api/getMypage";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Input from "../components/todo/Input";
import State from "../components/todo/State";

const MyPage = () => {
  const [data, setData] = useState();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }

    getMyPage().then((res) => {
      setData(res);
    });
  }, [location]);

  return (
    <>
      <Header />
      <Input />
      <State />
      <Outlet />
    </>
  );
};

export default MyPage;

import React from "react";
import { HeaderComponent } from "../Header/Header";
import { MainComponent } from "../Main/Main";
import { FooterComponent } from "../Footer/Footer";

export function PageWrapperComponent() {
  return (
    <div className="wrapper">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
    </div>
  );
}

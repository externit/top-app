/// <reference types="next" />
/// <reference types="next/types/global" />

// import { ReactSVG } from "react";

declare module "*.svg"{
    const content : React.FunctionComponent<React.SVGAttributes<SVGAElement> ,SVGAElement>;
    export default content;
}

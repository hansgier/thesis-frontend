import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import { InputSelect } from "../components/index.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={ <PaletteTree /> }>
            <ComponentPreview path="/InputSelect">
                <InputSelect />
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
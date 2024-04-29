import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import { MultiSelect } from "../components/index.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={ <PaletteTree /> }>
            <ComponentPreview path="/MultiSelect">
                <MultiSelect />
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
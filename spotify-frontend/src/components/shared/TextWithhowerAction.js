import {Link} from "react-router-dom"
const TextWithHover = ({displayText,root,active}) => {
    return (
        <div className="flex items-center justify-start cursor-pointer">
            <div
                className={`${
                    active ? "text-white" : "text-gray-500"
                } font-semibold hover:text-white`}
            >
                <Link to={root}>{displayText}</Link>
            </div>
        </div>
    );
};

export default TextWithHover;

import { useNavigate, useLocation } from "react-router";
import './NavigateLink.css';
import { memo, Fragment } from "react";

interface NavigateLinkProps
{
    link: string,
    label: string,
}

const pathSegmentToTitles = new Map<string, string>([
    ["", "Estelle Booher"],
    ["hello-cube", "Hello Cube"],
    ["sky-sea", "Sky and Sea"]
]);

const NavigateLink = memo(function NavigateLink({link, label} : NavigateLinkProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link)?.catch((err) => {
            throw new Error("Unable to navigate", {cause: err});
        });
    }
    return (
        <button className="nav-button" onClick={handleClick} type="button">{label}</button>
    );
})

export const NavigationHeader = memo(function NavigationHeader() {
    const location = useLocation();

    const navSteps = [
        <Fragment key={pathSegmentToTitles.get("")}>
            <NavigateLink link={"/"} label={pathSegmentToTitles.get("")!}/>
        </Fragment>
    ];
    
    if (location.pathname != "/")
    {
        const pathSegments = location.pathname.substring(1).split("/");
        let accumulatedLink = "/"; 
        navSteps.push(...pathSegments.map((segment: string, index: number) => {
            const prettySegment = pathSegmentToTitles.get(segment);
            const separator = index > 0 ? '/' : '';
            accumulatedLink = accumulatedLink.concat(`${separator}${segment}`);
            return <Fragment key={prettySegment}>
                {' > '}
                <NavigateLink link={accumulatedLink} label={prettySegment ? prettySegment : segment}/>
            </Fragment>
        }));
    }

    return <header className="website-header">
        {navSteps}
    </header>
});
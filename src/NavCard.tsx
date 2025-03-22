import { Link } from "react-router";
import { memo } from "react";
import "./NavCard.css";

export interface NavCardThumbnail {
	url: URL;
	alt: string;
}

export const NavCard = memo(function DisplayCard({
	href,
	external,
	thumbnails,
	title,
	description,
}: {
	href: string;
	external?: boolean;
	thumbnails?: NavCardThumbnail[];
	title: string;
	description: string;
}) {
	return (
		<Link
			className="nav-card"
			to={href}
			{...(external
				? {
						target: "_blank",
						rel: "noopener noreferrer",
				  }
				: undefined)}
		>
			<h2>{title}</h2>
			<p>{description}</p>
			<div className="nav-card-thumbnails">
				{(thumbnails ?? []).map((thumbnail: NavCardThumbnail) => (
					<div className="nav-card-thumbnail" key={thumbnail.url.toString()}>
						<img
							className="nav-card-image"
							src={thumbnail.url.href}
							alt={thumbnail.alt}
						/>
					</div>
				))}
			</div>
		</Link>
	);
});

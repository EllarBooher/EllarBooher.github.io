import { Link } from "react-router";
import { memo } from "react";
import "./NavCard.css";

export interface NavCardThumbnail {
	url: URL;
	alt: string;
}

export const NavCard = memo(function DisplayCard({
	url,
	thumbnails,
	title,
	description,
}: {
	url: URL;
	thumbnails?: NavCardThumbnail[];
	title: string;
	description: string;
}) {
	return (
		<Link className="nav-card" to={url.href}>
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

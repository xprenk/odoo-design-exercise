import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

document.addEventListener("DOMContentLoaded", function () {
	const backToTopButton = document.getElementById("backToTop");
	const mobileNavEl = document.getElementById("mobileNav");
	const headerEl = document.getElementById("top");

	const updateNavbarShadow = () => {
		if (!headerEl) return;
		if (window.scrollY > 0) {
			headerEl.classList.add("navbar-elevated");
		} else {
			headerEl.classList.remove("navbar-elevated");
		}
	};

	updateNavbarShadow();
	window.addEventListener("scroll", updateNavbarShadow, { passive: true });

	if (backToTopButton) {
		window.addEventListener(
			"scroll",
			function () {
				if (window.scrollY > 300) {
					backToTopButton.classList.add("show");
				} else {
					backToTopButton.classList.remove("show");
				}
			},
			{ passive: true }
		);

		backToTopButton.addEventListener("click", function () {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});
	}

	document.addEventListener("click", (e) => {
		const anchor = e.target.closest('a[href^="#"]');
		if (!anchor) return;

		const href = anchor.getAttribute("href");
		if (!href) return;

		e.preventDefault();

		const isFromMobileNav = mobileNavEl && anchor.closest("#mobileNav");

		if (href === "#") {
			if (isFromMobileNav) {
				const oc = bootstrap.Offcanvas.getOrCreateInstance(mobileNavEl);
				oc.hide();
				setTimeout(() => {
					window.scrollTo({ top: 0, behavior: "smooth" });
				}, 300);
			} else {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}
			return;
		}

		const id = href.slice(1);
		const targetEl = document.getElementById(id);
		if (targetEl) {
			if (isFromMobileNav) {
				const oc = bootstrap.Offcanvas.getOrCreateInstance(mobileNavEl);
				oc.hide();
				setTimeout(() => {
					targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
				}, 300);
			} else {
				targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}
	});

	const awardsCards = document.getElementById("awardsCards");
	const scrollLeftBtn = document.getElementById("scrollLeft");
	const scrollRightBtn = document.getElementById("scrollRight");

	if (awardsCards && scrollLeftBtn && scrollRightBtn) {
		const updateScrollButtons = () => {
			const scrollLeft = awardsCards.scrollLeft;
			const maxScroll = awardsCards.scrollWidth - awardsCards.clientWidth;

			if (scrollLeft <= 0) {
				scrollLeftBtn.classList.add("d-none");
				scrollRightBtn.classList.remove("d-none");
			} else if (scrollLeft >= maxScroll - 5) {
				scrollLeftBtn.classList.remove("d-none");
				scrollRightBtn.classList.add("d-none");
			}
		};

		scrollRightBtn.addEventListener("click", () => {
			const maxScroll = awardsCards.scrollWidth - awardsCards.clientWidth;
			awardsCards.scrollTo({
				left: maxScroll,
				behavior: "smooth",
			});
		});

		scrollLeftBtn.addEventListener("click", () => {
			awardsCards.scrollTo({
				left: 0,
				behavior: "smooth",
			});
		});

		awardsCards.addEventListener("scroll", updateScrollButtons);

		updateScrollButtons();

		window.addEventListener("resize", updateScrollButtons);
	}
});

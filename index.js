const button1 = document.getElementById("button1");
		const button2 = document.getElementById("button2");
		const button3 = document.getElementById("button3");

		const text1 = document.getElementById("text1");
		const text2 = document.getElementById("text2");
		const text3 = document.getElementById("text3");

		button1.addEventListener("click", () => {
			text1.classList.add("active");
			text2.classList.remove("active");
			text3.classList.remove("active");
		});

		button2.addEventListener("click", () => {
			text1.classList.remove("active");
			text2.classList.add("active");
			text3.classList.remove("active");
		});

		button3.addEventListener("click", () => {
			text1.classList.remove("active");
			text2.classList.remove("active");
			text3.classList.add("active");
		});
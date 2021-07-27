var canvas = new fabric.Canvas('myCanvas');
block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function new_image(get_image) {
	fabric.Image.fromURL("br.png", "gr.png", "pr.png", "rr1.png", "yr.png", function (Img) {
		player_object = Img;

		br_object.scaleToWidth(150);
		br_object.scaleToHeight(140);
		br_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(br_object);

		gr_object.scaleToWidth(150);
		gr_object.scaleToHeight(140);
		gr_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(gr_object);

		pr_object.scaleToWidth(150);
		pr_object.scaleToHeight(140);
		pr_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(pr_object);

		rr1_object.scaleToWidth(150);
		rr1_object.scaleToHeight(140);
		rr1_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(rr1_object);

		yr_object.scaleToWidth(150);
		yr_object.scaleToHeight(150);
		yr_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(yr_object);

	});

}

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(block_image_object);

	});
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (e.shiftKey == true && keyPressed == '80') {
		console.log("p and shift pressed together");
		block_image_width = block_image_width + 10;
		block_image_height = block_image_height + 10;
		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;
	}
	if (e.shiftKey == true && keyPressed == '77') {
		console.log("m and shift pressed together");
		block_image_width = block_image_width - 10;
		block_image_height = block_image_height - 10;
		document.getElementById("current_width").innerHTML = block_image_width;
		document.getElementById("current_height").innerHTML = block_image_height;
	}

	if (keyPressed == '82') {
		new_image('rr1.png');
		console.log("r");
	}
	if (keyPressed == '71') {

		new_image('gr.png');
		console.log("g")
	}

	if (keyPressed == '89') {

		new_image('yr.png')
		console.log("y")
	}
	if (keyPressed == '80') {
		new_image('pr.png')
		console.log("p")
	}
	if (keyPressed == '66') {
		new_image('br.png')
		console.log("b")
	}

}
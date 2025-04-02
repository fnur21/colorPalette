document.getElementById("mixButton").addEventListener("click", function() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const color3 = document.getElementById("color3").value;
    
    const mixedColor = mixColors(color1, color2, color3);
    document.getElementById("mixedColor").style.backgroundColor = mixedColor;
    document.getElementById("hexCode").textContent = mixedColor;
});

document.getElementById("addToPalette").addEventListener("click", function() {
    const mixedColor = document.getElementById("mixedColor").style.backgroundColor;
    const hexCode = document.getElementById("hexCode").textContent;

    const colorItem = createColorItem(mixedColor, hexCode);
    document.getElementById("palette").appendChild(colorItem);
});

function mixColors(color1, color2, color3) {
    const r = (parseInt(color1.slice(1, 3), 16) + parseInt(color2.slice(1, 3), 16) + parseInt(color3.slice(1, 3), 16)) / 3;
    const g = (parseInt(color1.slice(3, 5), 16) + parseInt(color2.slice(3, 5), 16) + parseInt(color3.slice(3, 5), 16)) / 3;
    const b = (parseInt(color1.slice(5, 7), 16) + parseInt(color2.slice(5, 7), 16) + parseInt(color3.slice(5, 7), 16)) / 3;

    return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}

function createColorItem(color, hexCode) {
    const colorItem = document.createElement("div");
    colorItem.classList.add("color-item");
    colorItem.style.backgroundColor = color;
    colorItem.dataset.hex = hexCode;

    const controls = document.createElement("div");
    controls.classList.add("controls");

    const favoriteButton = document.createElement("button");
    favoriteButton.classList.add("favorite");
    favoriteButton.innerHTML = "⭐";
    favoriteButton.addEventListener("click", function() {
        document.getElementById("favoriteColors").appendChild(colorItem);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "🗑️";
    deleteButton.addEventListener("click", function() {
        document.getElementById("deletedPalette").appendChild(colorItem);
    });
    
    const restoreButton = document.createElement("button");
    restoreButton.classList.add("restore");
    restoreButton.innerHTML = "↩️";
    restoreButton.addEventListener("click", function() {
        document.getElementById("palette").appendChild(colorItem);
    });

    controls.appendChild(favoriteButton);
    controls.appendChild(deleteButton);
    controls.appendChild(restoreButton);
    colorItem.appendChild(controls);

    const colorCode = document.createElement("p");
    colorCode.textContent = hexCode;
    colorItem.appendChild(colorCode);

    return colorItem;
}

document.getElementById("favoritesTab").addEventListener("click", function() {
    document.getElementById("container").style.display = "none";
    document.getElementById("favorites").style.display = "block";
    document.getElementById("deleted").style.display = "none";
});

document.getElementById("deletedTab").addEventListener("click", function() {
    document.getElementById("container").style.display = "none";
    document.getElementById("favorites").style.display = "none";
    document.getElementById("deleted").style.display = "block";
});

document.getElementById("homeTab").addEventListener("click", function() {
    document.getElementById("container").style.display = "block";
    document.getElementById("favorites").style.display = "none";
    document.getElementById("deleted").style.display = "none";
});

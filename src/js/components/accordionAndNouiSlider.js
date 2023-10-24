import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const accordionItems = document.querySelectorAll(".accordion_item");

accordionItems.forEach(item => {
    const header = item.querySelector(".accordion_header");
    const svg = item.querySelector(".accordion_header").nextElementSibling
    const content = item.querySelectorAll(".accordion_content");
    header.addEventListener("click", () => {
      content.forEach(el => {
        el.style.display = el.style.display === "block" ? "none" : "block";
        svg.style.transform = svg.style.transform === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)";
      })
    });
});


// ************



var keypressSlider = document.querySelector(".slider-keypress");
var input0 = document.querySelector(".input-with-keypress-0");
var input1 = document.querySelector(".input-with-keypress-1");
var inputs = [input0, input1];


if(keypressSlider) {

  noUiSlider.create(keypressSlider, {
    start: [100, 1000000],
    connect: true,
    step: 1,
    range: {
      min: [100],
      max: [1000000]
    }
  });

  const handleInput = (input) => {
    input.addEventListener("input", function() {
      if (!this.value.startsWith("От ")) {
        this.value = "От " + this.value;
      }
    });
  };

  handleInput(input0);
  handleInput(input1);

  keypressSlider.noUiSlider.on("update", (values, handle) => {
    const startValue = values[0];
    const endValue = values[1];

    inputs[0].value = `От ${Math.floor(startValue)}`;
    inputs[1].value = `До ${Math.floor(endValue)}`;


    /* Початок відстеження натискань на клавіші у вводі */
    const setSliderHandle = (i, value) => {
      const r = [null, null];
      r[i] = value;
      keypressSlider.noUiSlider.set(r);
    };

    // Відстежувати події натискання клавіш на полі вводу.
    inputs.forEach((input, handle) => {
      input.addEventListener("change", function() {
        setSliderHandle(handle, this.value);
      });

      input.addEventListener("keydown", (e) => {
        const values = keypressSlider.noUiSlider.get();
        const value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        const steps = keypressSlider.noUiSlider.steps();

        // [down, up]
        const step = steps[handle];

        let position;

        // 13 - enter,
        // 38 - key up,
        // 40 - key down.
        switch (e.which) {
          case 13:
            setSliderHandle(handle, this.value);
            break;

          case 38:
            // Отримувати крок для збільшення значення слайдера (up)
            position = step[1];

            // false - крок не встановлено
            if (position === false) {
              position = 1;
            }

            // null - край слайдера
            if (position !== null) {
              setSliderHandle(handle, value + position);
            }

            break;

          case 40:
            position = step[0];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              setSliderHandle(handle, value - position);
            }

            break;
        }
      });
    });
    /* Кінець відстеження натискань на клавіші у вводі */
  });

}

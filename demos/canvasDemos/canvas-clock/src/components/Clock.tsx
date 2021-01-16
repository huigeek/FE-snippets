import { defineComponent, h, onMounted } from "vue";

export default defineComponent({
  name: 'Clock',
  setup(){
    const canvas = document.createElement('canvas'),
          ctx = canvas.getContext('2d'),
          FONT_HEIGHT = 15,
          MARGIN = 35,
          HAND_TRUNCATION = canvas.width / 25,
          HOUR_HAND_TRUNCATION = canvas.width / 10,
          NUMERAL_SPACING = 20,
          RADIUS = canvas.width / 2 - MARGIN,
          HAND_RADIUS = RADIUS + NUMERAL_SPACING
    
    canvas.width = 400
    canvas.height = 400

    // functions
    function drawCircle() {
      ctx?.beginPath()
      ctx?.arc(canvas.width / 2, canvas.height / 2, RADIUS, 0, Math.PI * 2, true)
      ctx?.stroke()
    }

    function drawNumerals() {
      const numerals: number[] = Array.from(Array(12), (_, idx) => (idx + 1))
      let angle: number = 0,
          numeralWidth: number = 0
      
      numerals.forEach(numeral => {
        angle = Math.PI / 6 * (numeral - 3)
        numeralWidth = ctx?.measureText(String(numeral)).width as number
        ctx?.fillText(String(numeral),
          canvas.width / 2 + Math.cos(angle) * (HAND_RADIUS) - numeralWidth / 2,
          canvas.height / 2 + Math.sin(angle) * (HAND_RADIUS) + FONT_HEIGHT / 3)
      })
    }

    function drawCenter() {
      ctx?.beginPath()
      ctx?.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2, true)
      ctx?.fill()
    }

    function drawHand(loc: number, isHour: boolean) {
      let angle = (Math.PI * 2) * (loc / 60) - Math.PI / 2
      let handRadius = isHour ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION
                              : RADIUS - HAND_TRUNCATION
      
      ctx?.moveTo(canvas.width / 2, canvas.height / 2)
      ctx?.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius, 
                  canvas.height / 2 + Math.sin(angle) * handRadius)
      
      ctx?.stroke()
    }

    function drawHands() {
      let date = new Date,
          hour = date.getHours()
      
      hour = hour > 12 ? hour - 12 : hour

      drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true)
      drawHand(date.getMinutes(), false)
      drawHand(date.getSeconds(), false)
    }


    function drawClock() {
      ctx?.clearRect(0, 0, canvas.width, canvas.height)

      drawCircle()
      drawCenter()
      drawHands()
      drawNumerals()
    }

    // initialization
    (ctx as CanvasRenderingContext2D).font = FONT_HEIGHT + 'px Arial'

    document.body.appendChild(canvas)

    onMounted(() => setInterval(drawClock, 1000))
  }
})
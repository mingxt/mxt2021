import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default {
  install (Vue, options) {
    Vue.prototype.getPdf = function (htmlTitle, id) {
      html2canvas(document.querySelector(id), {
        async: true,
        logging: false,
        useCORS: true
      }).then(function (canvas) {
        // eslint-disable-next-line new-cap
        var pdf = new jsPDF('p', 'mm', 'a4')
        // eslint-disable-next-line one-var
        var ctx = canvas.getContext('2d'),
          a4w = 190, a4h = 277,
          imgHeight = Math.floor(a4h * canvas.width / a4w),
          renderedHeight = 0
        while (renderedHeight < canvas.height) {
          var page = document.createElement('canvas')
          page.width = canvas.width
          page.height = Math.min(imgHeight, canvas.height - renderedHeight)
          // 用getImageData剪裁指定区域，并画到前面创建的canvas对象中
          page.getContext('2d').putImageData(ctx.getImageData(-1, renderedHeight, canvas.width, Math.min(imgHeight, canvas.height - renderedHeight)), 0, 0)
          console.log(Math.min(imgHeight, canvas.height - renderedHeight))
          pdf.addImage(page.toDataURL('image/jpeg', 1.0), 'JPEG', 10, 10, a4w, Math.min(a4h, a4w * page.height / page.width))
          renderedHeight += imgHeight
          if (renderedHeight < canvas.height) {
            pdf.addPage()
          }
        }
        pdf.save(htmlTitle)
      })
    }
  }
}

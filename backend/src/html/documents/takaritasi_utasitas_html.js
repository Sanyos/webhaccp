exports.html = (data) => {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="hu" lang="hu">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>file_1655403671979</title>
    <meta name="author" content="Nyikes Nándor" />
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
        text-indent: 0;
      }
      .s1 {
        color: #039;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 16pt;
      }
      .s2 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 14pt;
      }
      .s3 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 11pt;
      }
      .s4 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 9pt;
      }
      .s5 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      .s6 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 6pt;
        vertical-align: 3pt;
      }
      table,
      tbody {
        vertical-align: top;
        overflow: visible;
      }
    </style>
  </head>
  <body>
    <table
      width="95%"
      style="border-collapse: collapse; margin: 1rem auto;"
      cellspacing="0"
    >
      <tr style="height: 43pt">
        <td
          style="
            width: 765pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="10"
        >
          <p
            class="s1"
            style="
              padding-top: 11pt;
              padding-left: 344pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            TAKARÍTÁSI UTASÍTÁS
          </p>
        </td>
      </tr>
      <tr style="height: 18pt">
        <td
          style="
            width: 500pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="7"
        >
          <p
            class="s2"
            style="
              padding-left: 5pt;
              text-indent: 0pt;
              line-height: 16pt;
              text-align: left;
            "
          >
            Telephely: ${data.company_address}
          </p>
        </td>
        <td
          style="
            width: 265pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="3"
        >
          <p
            class="s2"
            style="
              padding-left: 81pt;
              text-indent: 0pt;
              line-height: 16pt;
              text-align: left;
            "
          >
            Kiadás időpontja: ${new Date()
              .toISOString()
              .split("T")[0]
              .replace(/-/g, ".")}
          </p>
        </td>
      </tr>
      <tr style="height: 20pt">
        <td
          style="
            width: 765pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="10"
        >
          <p
            class="s2"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left"
          >
            Takarításért felelős személy/-ek/ neve, aláírása:
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          rowspan="4"
          bgcolor="#C5DFB3"
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s3"
            style="padding-left: 28pt; text-indent: -13pt; text-align: left"
          >
            takarítandó felület
          </p>
        </td>
        <td
          style="
            width: 452pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="6"
          bgcolor="#C5DFB3"
        >
          <p
            class="s3"
            style="
              padding-left: 164pt;
              padding-right: 164pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            "
          >
            takarításhoz használandó
          </p>
        </td>
        <td
          style="
            width: 87pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          rowspan="4"
          bgcolor="#C5DFB3"
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s3"
            style="padding-left: 15pt; text-indent: 7pt; text-align: left"
          >
            takarítás gyakorisága
          </p>
        </td>
        <td
          style="
            width: 141pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="2"
          rowspan="3"
          bgcolor="#C5DFB3"
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s3"
            style="
              padding-left: 55pt;
              padding-right: 54pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            felelős
          </p>
        </td>
      </tr>
      <tr style="height: 13pt">
        <td
          style="
            width: 379pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="5"
          bgcolor="#C5DFB3"
        >
          <p
            class="s3"
            style="
              padding-left: 179pt;
              padding-right: 178pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            "
          >
            szer
          </p>
        </td>
        <td
          style="
            width: 73pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          rowspan="3"
          bgcolor="#C5DFB3"
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s3"
            style="padding-left: 21pt; text-indent: 0pt; text-align: left"
          >
            eszköz
          </p>
        </td>
      </tr>
      <tr style="height: 13pt">
        <td
          style="
            width: 96pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          rowspan="2"
          bgcolor="#C5DFB3"
        >
          <p
            class="s3"
            style="
              padding-top: 6pt;
              padding-left: 10pt;
              padding-right: 10pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            neve
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          rowspan="2"
          bgcolor="#C5DFB3"
        >
          <p
            class="s3"
            style="
              padding-top: 6pt;
              padding-left: 22pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            hatása
          </p>
        </td>
        <td
          style="
            width: 142pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="2"
          bgcolor="#C5DFB3"
        >
          <p
            class="s3"
            style="
              padding-left: 42pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            "
          >
            munkaoldat
          </p>
        </td>
        <td
          style="
            width: 65pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          rowspan="2"
          bgcolor="#C5DFB3"
        >
          <p
            class="s3"
            style="
              padding-left: 25pt;
              text-indent: -12pt;
              line-height: 13pt;
              text-align: left;
            "
          >
            behatási idő
          </p>
        </td>
      </tr>
      <tr style="height: 13pt">
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          bgcolor="#C5DFB3"
        >
          <p
            class="s3"
            style="
              padding-left: 6pt;
              padding-right: 6pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            "
          >
            koncentráció
          </p>
        </td>
        <td
          style="
            width: 66pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          bgcolor="#C5DFB3"
        >
          <p
            class="s3"
            style="
              padding-left: 19pt;
              padding-right: 18pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: center;
            "
          >
            hőfok
          </p>
        </td>
        <td
          style="
            width: 71pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          bgcolor="#C5DFB3"
        >
          <p
            class="s3"
            style="
              padding-left: 10pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            "
          >
            elvégzésért
          </p>
        </td>
        <td
          style="
            width: 70pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          bgcolor="#C5DFB3"
        >
          <p
            class="s3"
            style="
              padding-left: 5pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            "
          >
            ellenőrzésért
          </p>
        </td>
      </tr>
      <tr style="height: 32pt">
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left"
          >
            Üvegfelületek
          </p>
        </td>
        <td
          style="
            width: 96pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 10pt;
              padding-right: 10pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            CLIN
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-right: 10pt; text-indent: 0pt; text-align: right"
          >
            felülettisztítás
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-top: 5pt;
              padding-left: 21pt;
              padding-right: 11pt;
              text-indent: -9pt;
              text-align: left;
            "
          >
            hígítatlanul a felületre
          </p>
        </td>
        <td
          style="
            width: 66pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p class="s4" style="text-indent: 0pt; text-align: center">-</p>
        </td>
        <td
          style="
            width: 65pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p class="s4" style="text-indent: 0pt; text-align: center">-</p>
        </td>
        <td
          style="
            width: 73pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-left: 10pt; text-indent: 0pt; text-align: left"
          >
            kendő, lehúzó
          </p>
        </td>
        <td
          style="
            width: 87pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            Hetente
          </p>
        </td>
        <td
          style="
            width: 71pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 70pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 73pt">
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 5pt;
              padding-right: 28pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Felületi fertőtlenítő élelmiszerrel érintkező
          </p>
          <p
            class="s4"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left"
          >
            felületekre
          </p>
        </td>
        <td
          style="
            width: 96pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-top: 7pt;
              padding-left: 10pt;
              padding-right: 10pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            Sanytol
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-top: 7pt;
              padding-right: 14pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
            fertőtlenítés
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-top: 7pt;
              padding-left: 6pt;
              padding-right: 6pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            Töményen
          </p>
        </td>
        <td
          style="
            width: 66pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-top: 7pt; text-indent: 0pt; text-align: center"
          >
            -
          </p>
        </td>
        <td
          style="
            width: 65pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-top: 5pt;
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            5 perc <span class="s5">(Nem kell öblíteni, de</span>
          </p>
          <p
            class="s5"
            style="
              padding-left: 6pt;
              padding-right: 6pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            meg kell várni az elpárolgási időt!)
          </p>
        </td>
        <td
          style="
            width: 73pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-left: 24pt; text-indent: -6pt; text-align: left"
          >
            szórófejes flakon
          </p>
        </td>
        <td
          style="
            width: 87pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-top: 7pt;
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            Naponta
          </p>
        </td>
        <td
          style="
            width: 71pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 70pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 42pt">
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left"
          >
            Kézmosás
          </p>
        </td>
        <td
          style="
            width: 96pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-top: 5pt;
              padding-left: 10pt;
              padding-right: 10pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            RIA
          </p>
          <p
            class="s4"
            style="
              padding-left: 10pt;
              padding-right: 10pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: center;
            "
          >
            fertőtlenítős
          </p>
          <p
            class="s4"
            style="
              padding-left: 10pt;
              padding-right: 10pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: center;
            "
          >
            folyékony szappan
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-left: 15pt; text-indent: 7pt; text-align: left"
          >
            tisztítás, fertőtlenítés
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 27pt;
              padding-right: 11pt;
              text-indent: -15pt;
              text-align: left;
            "
          >
            kézi adagolás (3ml)
          </p>
        </td>
        <td
          style="
            width: 66pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 19pt;
              padding-right: 18pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            30 <span class="s6">o</span>C
          </p>
        </td>
        <td
          style="
            width: 65pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-left: 6pt;
              padding-right: 5pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            30 másodperc (virucid hatás eléréséhez:
          </p>
          <p
            class="s4"
            style="
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              line-height: 9pt;
              text-align: center;
            "
          >
            60 mp)
          </p>
        </td>
        <td
          style="
            width: 73pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p class="s4" style="text-indent: 0pt; text-align: center">-</p>
        </td>
        <td
          style="
            width: 87pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            Munkafolyamat
          </p>
        </td>
        <td
          style="
            width: 71pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 70pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 31pt">
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 5pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: left;
            "
          >
            Kézfertőtlenítés (virucid)
          </p>
        </td>
        <td
          style="
            width: 96pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-left: 10pt;
              padding-right: 10pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: center;
            "
          >
            AT HAND
          </p>
          <p
            class="s4"
            style="
              padding-left: 19pt;
              padding-right: 19pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: center;
            "
          >
            Alkoholos kézfertőtlenítő
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-right: 14pt; text-indent: 0pt; text-align: right"
          >
            fertőtlenítés
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 6pt;
              padding-right: 6pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            Töményen
          </p>
        </td>
        <td
          style="
            width: 66pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p class="s4" style="text-indent: 0pt; text-align: center">-</p>
        </td>
        <td
          style="
            width: 65pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p class="s4" style="text-indent: 0pt; text-align: center">-</p>
        </td>
        <td
          style="
            width: 73pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-top: 5pt;
              padding-left: 21pt;
              padding-right: 7pt;
              text-indent: -12pt;
              text-align: left;
            "
          >
            érintés mentes adagoló
          </p>
        </td>
        <td
          style="
            width: 87pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            Naponta
          </p>
        </td>
        <td
          style="
            width: 71pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 70pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 42pt">
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left"
          >
            2 fázisú mosogatószer
          </p>
        </td>
        <td
          style="
            width: 96pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-left: 21pt; text-indent: -8pt; text-align: left"
          >
            RIA 2 fertőtlenítő mosogatószer
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-left: 15pt; text-indent: 4pt; text-align: left"
          >
            zsíroldás, fertőtlenítés
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 11pt;
              padding-right: 10pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            kézi adagolás (2%-os oldat)
          </p>
        </td>
        <td
          style="
            width: 66pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 19pt;
              padding-right: 18pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            45<span class="s6">o</span>C
          </p>
        </td>
        <td
          style="
            width: 65pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            5 perc
          </p>
        </td>
        <td
          style="
            width: 73pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 5pt;
              padding-right: 4pt;
              text-indent: 6pt;
              text-align: left;
            "
          >
            Kefe, kendő, műanyag dörzsi
          </p>
        </td>
        <td
          style="
            width: 87pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            Naponta
          </p>
        </td>
        <td
          style="
            width: 71pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 70pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 83pt">
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-left: 5pt;
              padding-right: 28pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Általános fertőtlenító (padozat, burkolatok, szaniter-berendezések
            felületeinek
          </p>
          <p
            class="s4"
            style="
              padding-left: 5pt;
              text-indent: 0pt;
              line-height: 9pt;
              text-align: left;
            "
          >
            fertőtlenítésére)
          </p>
        </td>
        <td
          style="
            width: 96pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 10pt;
              padding-right: 10pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            DOMESTOS
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-top: 7pt;
              padding-left: 15pt;
              text-indent: -3pt;
              text-align: left;
            "
          >
            felülettisztítás fertőtlenítés
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-top: 7pt;
              padding-left: 16pt;
              padding-right: 6pt;
              text-indent: -9pt;
              text-align: left;
            "
          >
            kézi adagolás (5 l-hez 75ml)
          </p>
        </td>
        <td
          style="
            width: 66pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 19pt;
              padding-right: 18pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            20<span class="s6">o</span>C
          </p>
        </td>
        <td
          style="
            width: 65pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            5 perc
          </p>
        </td>
        <td
          style="
            width: 73pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-top: 7pt;
              padding-left: 24pt;
              padding-right: 15pt;
              text-indent: -7pt;
              text-align: left;
            "
          >
            Mop, kefe, lehúzó
          </p>
        </td>
        <td
          style="
            width: 87pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            Naponta
          </p>
        </td>
        <td
          style="
            width: 71pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 70pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 32pt">
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left"
          >
            Vízkőoldó
          </p>
        </td>
        <td
          style="
            width: 96pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 10pt;
              padding-right: 10pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            CILLIT
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-top: 5pt;
              padding-left: 20pt;
              text-indent: -11pt;
              text-align: left;
            "
          >
            vízkő és rozsda eltávolító
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-top: 5pt;
              padding-left: 21pt;
              padding-right: 11pt;
              text-indent: -9pt;
              text-align: left;
            "
          >
            hígítatlanul a felületre
          </p>
        </td>
        <td
          style="
            width: 66pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p class="s4" style="text-indent: 0pt; text-align: center">-</p>
        </td>
        <td
          style="
            width: 65pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p class="s4" style="text-indent: 0pt; text-align: center">-</p>
        </td>
        <td
          style="
            width: 73pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-top: 5pt;
              padding-left: 24pt;
              text-indent: -6pt;
              text-align: left;
            "
          >
            szórófejes flakon
          </p>
        </td>
        <td
          style="
            width: 87pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s4"
            style="
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            Hetente
          </p>
        </td>
        <td
          style="
            width: 71pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 70pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 21pt">
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-left: 5pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: left;
            "
          >
            Sütők, ráégések hideg zsíroldás
          </p>
        </td>
        <td
          style="
            width: 96pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-top: 5pt;
              padding-left: 10pt;
              padding-right: 10pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            WELL DONE
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-top: 5pt;
              padding-left: 21pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            zsíroldás
          </p>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-left: 21pt;
              padding-right: 11pt;
              text-indent: -9pt;
              line-height: 10pt;
              text-align: left;
            "
          >
            hígítatlanul a felületre
          </p>
        </td>
        <td
          style="
            width: 66pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="padding-top: 5pt; text-indent: 0pt; text-align: center"
          >
            -
          </p>
        </td>
        <td
          style="
            width: 65pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-top: 5pt;
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            5 perc
          </p>
        </td>
        <td
          style="
            width: 73pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-left: 14pt;
              padding-right: 13pt;
              text-indent: 4pt;
              line-height: 10pt;
              text-align: left;
            "
          >
            műanyag dörzsi, kefe
          </p>
        </td>
        <td
          style="
            width: 87pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s4"
            style="
              padding-top: 5pt;
              padding-left: 12pt;
              padding-right: 11pt;
              text-indent: 0pt;
              text-align: center;
            "
          >
            Naponta
          </p>
        </td>
        <td
          style="
            width: 71pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 70pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};

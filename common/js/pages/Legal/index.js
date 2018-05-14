import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'antd';

class LegalNotice extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Legal notice"
          meta={ [
            { name: "description", content: "Legal notice of Tepee" }
          ] }
        />
        <Row>
          <Col span={24}>
            <h1>Legal notice</h1>
          </Col>
          <Col span={24}>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="http://loripsum.net/" target="_blank">Istic sum, inquit.</a> <a href="http://loripsum.net/" target="_blank">Nos commodius agimus.</a> Unum nescio, quo modo possit, si luxuriosus sit, finitas cupiditates habere. <a href="http://loripsum.net/" target="_blank">Quae cum dixisset, finem ille.</a> Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere. <b>Scrupulum, inquam, abeunti;</b> Duo Reges: constructio interrete. Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas. <a href="http://loripsum.net/" target="_blank">Fortemne possumus dicere eundem illum Torquatum?</a> Qua tu etiam inprudens utebare non numquam. </p>
            <p>Sed et illum, quem nominavi, et ceteros sophistas, ut e Platone intellegi potest, lusos videmus a Socrate. Rationis enim perfectio est virtus; Mihi, inquam, qui te id ipsum rogavi? Cum salvum esse flentes sui respondissent, rogavit essentne fusi hostes. <i>Quid ait Aristoteles reliquique Platonis alumni?</i> <mark>Minime vero istorum quidem, inquit.</mark> <a href="http://loripsum.net/" target="_blank">Consequentia exquirere, quoad sit id, quod volumus, effectum.</a> <a href="http://loripsum.net/" target="_blank">Eadem fortitudinis ratio reperietur.</a> Quis est tam dissimile homini. Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. </p>
            <p>Dicimus aliquem hilare vivere; Claudii libidini, qui tum erat summo ne imperio, dederetur. Non potes, nisi retexueris illa. Sic enim censent, oportunitatis esse beate vivere. Sin laboramus, quis est, qui alienae modum statuat industriae? Quis Pullum Numitorium Fregellanum, proditorem, quamquam rei publicae nostrae profuit, non odit? </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LegalNotice;
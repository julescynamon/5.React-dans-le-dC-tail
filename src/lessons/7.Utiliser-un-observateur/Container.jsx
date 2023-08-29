import { useEffect, useRef } from "react";
import "./Container.css";

export default function Container() {
  const newsletterRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        newsletterRef.current.classList.add("active");
        observer.unobserve(newsletterRef.current);
      }
    });

    observer.observe(newsletterRef.current);

    return () => {
      observer.unobserve(newsletterRef.current);
    };
  }, []);

  return (
    <div className="container">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        eligendi facilis dicta ipsam! Eveniet, obcaecati fugit maxime facere
        illo officia quas labore in voluptatem unde nobis quidem nesciunt. Illum
        explicabo atque consequuntur magni sapiente corporis officia beatae odit
        saepe quos impedit praesentium, asperiores error ut obcaecati nobis
        temporibus quae suscipit odio laudantium! Asperiores animi suscipit
        aliquam quo ullam sapiente, saepe pariatur assumenda nam odit
        doloremque, ut ratione reiciendis quidem minus mollitia? Illum possimus
        tenetur et accusantium! Odit repellendus eligendi laudantium vero
        sapiente natus quia laborum? Earum fugit nobis dignissimos in, assumenda
        nesciunt dicta modi impedit est. Impedit sequi enim commodi, libero
        nobis minima nisi. Exercitationem ut soluta similique expedita saepe
        aliquid excepturi. Ut reprehenderit nobis illum eveniet vel? Dolor,
        voluptates! Harum tempora aliquam quo ad, assumenda, consequatur quae
        architecto vero fuga cum non impedit ullam nulla maiores mollitia et
        tempore reiciendis, atque voluptatum ut error? Aspernatur, numquam.
        Autem dolores minus, ducimus quo obcaecati consequuntur ipsam blanditiis
        explicabo repudiandae impedit culpa nisi esse magni sequi voluptate
        facere facilis. Doloribus accusantium natus cum veniam exercitationem
        totam voluptatibus deserunt. Sint omnis, nihil accusamus ut doloribus
        incidunt iste ratione ipsa explicabo eligendi, aut optio earum, aperiam
        illum repellendus consequatur! Itaque, minima? Amet qui ab reprehenderit
        minus cum, quibusdam quaerat ex. Sit magni nulla aperiam exercitationem
        saepe voluptatum eligendi, facilis ullam repudiandae officiis doloribus
        minima similique vero id eveniet nostrum ut corporis commodi tempore et
        aut modi. Est id ducimus autem necessitatibus, laudantium molestias quam
        rerum explicabo reiciendis rem a deserunt esse veritatis, culpa quod
        sequi neque eius aperiam tempora? At fugiat enim quasi autem cumque qui
        rem possimus quos quia placeat labore adipisci, minus officiis ex.
        Consectetur aut fugit cupiditate quae non numquam animi perspiciatis
        saepe qui, ut dolorem ipsam assumenda et veritatis exercitationem
        pariatur rerum itaque. Sequi tempore neque architecto. Explicabo
        necessitatibus beatae a. Fugit eaque eos deserunt ipsa quibusdam vero
        doloribus sequi excepturi quaerat aspernatur molestias voluptas
        voluptatum iste cum, ipsam harum obcaecati ad dolor repellendus culpa
        alias in ex! Cumque magnam perspiciatis sunt sapiente quam dolorum,
        enim, minus porro vero eos beatae ducimus dolorem suscipit fuga non
        asperiores temporibus quaerat eveniet nobis facilis debitis esse quasi
        rem. Fugit tenetur minus quasi exercitationem a consectetur nisi eum, et
        maiores magni aliquid sed accusamus expedita vel quos laudantium
        cupiditate! Est debitis magni dolores deserunt eius, accusantium eveniet
        commodi quas itaque molestias, repellendus earum qui perferendis
        molestiae officiis atque beatae totam velit labore laboriosam modi
        doloribus. Amet maxime veritatis perspiciatis placeat laudantium quo
        excepturi possimus dicta doloribus magni? Eveniet dolorem sunt,
        reiciendis, provident sed eum, tempore minus officia explicabo error
        nostrum. Nostrum ea impedit neque laboriosam architecto, totam et, quia
        sed provident, a nobis sit corrupti inventore ratione quod ducimus
        pariatur similique doloremque. Animi ipsa, possimus quaerat soluta,
        quasi nulla fugiat voluptatem eum commodi delectus sint laboriosam
        pariatur sunt temporibus? Repellat dolorum quis, consequuntur recusandae
        quae exercitationem laboriosam perferendis sit ipsum, rerum a,
        blanditiis explicabo accusantium aut molestias nisi possimus temporibus
        natus neque non. Nam voluptas impedit voluptate neque ab maiores
        voluptatem dolores dolor hic aspernatur, sint laudantium dolore totam
        delectus nemo repellat a dicta. Expedita nam veritatis omnis fuga
        dignissimos cumque hic quibusdam blanditiis, porro, facilis et. Expedita
        tenetur earum eum repudiandae consectetur! Accusamus quae nam assumenda
        porro, autem voluptatem, labore temporibus nostrum omnis aliquam ab
        voluptates, sequi doloremque. Unde, ipsa at fuga iure tempore autem ut
        nemo a perspiciatis vel! Culpa possimus iusto cumque optio, dolorem quam
        quo minima aliquam iste mollitia. Minima eum quis voluptatum dolores?
        Totam fugit molestias dignissimos laudantium natus nemo, iure eligendi
        recusandae aliquam expedita ratione dolore repellat necessitatibus
        laborum magni quidem cumque earum assumenda hic molestiae adipisci sed
        quo consequuntur quod? Quaerat aut dolorem accusamus? Sint vel ullam
        similique repellendus distinctio voluptate molestias odit veritatis.
        Nemo cum perferendis repudiandae debitis a corporis unde aliquid ex quam
        cupiditate. Reprehenderit fugit, minima tempore error, nam sunt
        voluptatem expedita ab quis, asperiores suscipit itaque? Suscipit
        commodi delectus minima beatae, iste molestiae obcaecati temporibus
        mollitia sed quas cum laboriosam rerum facilis quibusdam vel veritatis
        asperiores repellat minus dolores recusandae deleniti error dolor.
        Aliquid officia sint minima, non vel ducimus maxime perspiciatis
        tempora, molestiae assumenda rem? Unde accusamus suscipit rerum,
        nesciunt maxime voluptatum reiciendis harum, est, quibusdam voluptatibus
        ex. Vitae pariatur ducimus consectetur blanditiis ab eius, ea nihil
        numquam corrupti molestias modi rem asperiores in porro recusandae
        necessitatibus beatae temporibus sint dignissimos iure obcaecati.
        Necessitatibus reprehenderit provident, aperiam eaque amet eligendi,
        neque et quidem odio quibusdam labore iste cum corrupti autem doloremque
        sint eveniet sed consequatur vitae. Est quo similique vero nobis. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eligendi
        facilis dicta ipsam! Eveniet, obcaecati fugit maxime facere illo officia
        quas labore in voluptatem unde nobis quidem nesciunt. Illum explicabo
        atque consequuntur magni sapiente corporis officia beatae odit saepe
        quos impedit praesentium, asperiores error ut obcaecati nobis temporibus
        quae suscipit odio laudantium! Asperiores animi suscipit aliquam quo
        ullam sapiente, saepe pariatur assumenda nam odit doloremque, ut ratione
        reiciendis quidem minus mollitia? Illum possimus tenetur et accusantium!
        Odit repellendus eligendi laudantium vero sapiente natus quia laborum?
        Earum fugit nobis dignissimos in, assumenda nesciunt dicta modi impedit
        est. Impedit sequi enim commodi, libero nobis minima nisi.
        Exercitationem ut soluta similique expedita saepe aliquid excepturi. Ut
        reprehenderit nobis illum eveniet vel? Dolor, voluptates! Harum tempora
        aliquam quo ad, assumenda, consequatur quae architecto vero fuga cum non
        impedit ullam nulla maiores mollitia et tempore reiciendis, atque
        voluptatum ut error? Aspernatur, numquam. Autem dolores minus, ducimus
        quo obcaecati consequuntur ipsam blanditiis explicabo repudiandae
        impedit culpa nisi esse magni sequi voluptate facere facilis. Doloribus
        accusantium natus cum veniam exercitationem totam voluptatibus deserunt.
        Sint omnis, nihil accusamus ut doloribus incidunt iste ratione ipsa
        explicabo eligendi, aut optio earum, aperiam illum repellendus
        consequatur! Itaque, minima? Amet qui ab reprehenderit minus cum,
        quibusdam quaerat ex. Sit magni nulla aperiam exercitationem saepe
        voluptatum eligendi, facilis ullam repudiandae officiis doloribus minima
        similique vero id eveniet nostrum ut corporis commodi tempore et aut
        modi. Est id ducimus autem necessitatibus, laudantium molestias quam
        rerum explicabo reiciendis rem a deserunt esse veritatis, culpa quod
        sequi neque eius aperiam tempora? At fugiat enim quasi autem cumque qui
        rem possimus quos quia placeat labore adipisci, minus officiis ex.
        Consectetur aut fugit cupiditate quae non numquam animi perspiciatis
        saepe qui, ut dolorem ipsam assumenda et veritatis exercitationem
        pariatur rerum itaque. Sequi tempore neque architecto. Explicabo
        necessitatibus beatae a. Fugit eaque eos deserunt ipsa quibusdam vero
        doloribus sequi excepturi quaerat aspernatur molestias voluptas
        voluptatum iste cum, ipsam harum obcaecati ad dolor repellendus culpa
        alias in ex! Cumque magnam perspiciatis sunt sapiente quam dolorum,
        enim, minus porro vero eos beatae ducimus dolorem suscipit fuga non
        asperiores temporibus quaerat eveniet nobis facilis debitis esse quasi
        rem. Fugit tenetur minus quasi exercitationem a consectetur nisi eum, et
        maiores magni aliquid sed accusamus expedita vel quos laudantium
        cupiditate! Est debitis magni dolores deserunt eius, accusantium eveniet
        commodi quas itaque molestias, repellendus earum qui perferendis
        molestiae officiis atque beatae totam velit labore laboriosam modi
        doloribus. Amet maxime veritatis perspiciatis placeat laudantium quo
        excepturi possimus dicta doloribus magni? Eveniet dolorem sunt,
        reiciendis, provident sed eum, tempore minus officia explicabo error
        nostrum. Nostrum ea impedit neque laboriosam architecto, totam et, quia
        sed provident, a nobis sit corrupti inventore ratione quod ducimus
        pariatur similique doloremque. Animi ipsa, possimus quaerat soluta,
        quasi nulla fugiat voluptatem eum commodi delectus sint laboriosam
        pariatur sunt temporibus? Repellat dolorum quis, consequuntur recusandae
        quae exercitationem laboriosam perferendis sit ipsum, rerum a,
        blanditiis explicabo accusantium aut molestias nisi possimus temporibus
        natus neque non. Nam voluptas impedit voluptate neque ab maiores
        voluptatem dolores dolor hic aspernatur, sint laudantium dolore totam
        delectus nemo repellat a dicta. Expedita nam veritatis omnis fuga
        dignissimos cumque hic quibusdam blanditiis, porro, facilis et. Expedita
        tenetur earum eum repudiandae consectetur! Accusamus quae nam assumenda
        porro, autem voluptatem, labore temporibus nostrum omnis aliquam ab
        voluptates, sequi doloremque. Unde, ipsa at fuga iure tempore autem ut
        nemo a perspiciatis vel! Culpa possimus iusto cumque optio, dolorem quam
        quo minima aliquam iste mollitia. Minima eum quis voluptatum dolores?
        Totam fugit molestias dignissimos laudantium natus nemo, iure eligendi
        recusandae aliquam expedita ratione dolore repellat necessitatibus
        laborum magni quidem cumque earum assumenda hic molestiae adipisci sed
        quo consequuntur quod? Quaerat aut dolorem accusamus? Sint vel ullam
        similique repellendus distinctio voluptate molestias odit veritatis.
        Nemo cum perferendis repudiandae debitis a corporis unde aliquid ex quam
        cupiditate. Reprehenderit fugit, minima tempore error, nam sunt
        voluptatem expedita ab quis, asperiores suscipit itaque? Suscipit
        commodi delectus minima beatae, iste molestiae obcaecati temporibus
        mollitia sed quas cum laboriosam rerum facilis quibusdam vel veritatis
        asperiores repellat minus dolores recusandae deleniti error dolor.
        Aliquid officia sint minima, non vel ducimus maxime perspiciatis
        tempora, molestiae assumenda rem? Unde accusamus suscipit rerum,
        nesciunt maxime voluptatum reiciendis harum, est, quibusdam voluptatibus
        ex. Vitae pariatur ducimus consectetur blanditiis ab eius, ea nihil
        numquam corrupti molestias modi rem asperiores in porro recusandae
        necessitatibus beatae temporibus sint dignissimos iure obcaecati.
        Necessitatibus reprehenderit provident, aperiam eaque amet eligendi,
        neque et quidem odio quibusdam labore iste cum corrupti autem doloremque
        sint eveniet sed consequatur vitae. Est quo similique vero nobis.
      </p>
      <div ref={newsletterRef} className="newsletter">
        <h2>Observer Element</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima
        quibusdam error eligendi odio architecto ipsum sequi, fugiat ipsam
        doloremque sapiente accusantium nemo dicta consequuntur similique esse
        possimus earum quo tenetur reprehenderit modi unde quidem inventore.
        Reiciendis cum cupiditate nesciunt molestiae quo asperiores, officiis
        quas id ipsa, sequi perferendis maiores alias? Ipsa neque dicta eos
        tenetur aspernatur quisquam adipisci praesentium cumque magnam
        perferendis, laborum rem, aliquam officiis error illum vero nesciunt
        quidem veniam reprehenderit? Alias numquam non est officiis excepturi
        esse iste, fugit qui animi ab ipsum distinctio quam aspernatur quaerat
        id architecto! Est reiciendis cum magni et odio amet vel vitae corrupti
        quas illo quis velit aspernatur eveniet, hic ratione autem impedit in?
        Laborum consequuntur magnam aut quibusdam! Sapiente deleniti ipsam a
        illo illum facere? Commodi labore ipsam, tempora beatae doloribus omnis
        esse, id illum fugit modi, necessitatibus deleniti ipsa doloremque dicta
        soluta harum. Commodi molestiae asperiores beatae at laborum ratione
        labore fuga, eligendi repellendus, pariatur eos nulla quae provident!
        Nostrum odit, velit, quas similique ea magnam corrupti minus eius
        aspernatur voluptatum obcaecati! Laboriosam, sit odio? Aliquid
        reprehenderit, id ab, dolorem, temporibus eum doloribus corporis ullam
        tempora qui facilis culpa rem nisi nulla facere saepe placeat
        repudiandae sint eaque deleniti! Ipsam, ad possimus rerum laboriosam
        quos delectus labore, eveniet dignissimos ea consequuntur nobis quis
        officiis, voluptas recusandae modi voluptatibus quo? Eveniet saepe ut,
        adipisci, iure, neque dolor harum explicabo repellat maiores optio
        reprehenderit! Quos voluptatum unde odio adipisci ipsam inventore nihil
        aut, excepturi qui quis cupiditate quidem ut ad rem ullam praesentium
        veritatis! Id, eum cumque ut provident culpa maiores. Atque veritatis
        recusandae non reiciendis neque cumque adipisci blanditiis odit modi
        exercitationem tenetur earum temporibus ipsam placeat, magni nemo
        repellat quasi dicta voluptatibus debitis minus aperiam tempore
        laboriosam. Sit, sequi? Eum, repudiandae est dolorum numquam
        reprehenderit temporibus consequuntur officiis sit accusamus id tempora
        fugiat quisquam vitae voluptatem fuga eveniet, quibusdam odio. Suscipit
        voluptate, perferendis qui iure ex nemo laudantium optio? Perferendis
        maxime explicabo expedita ut impedit unde ullam, natus eum aut totam in
        nulla mollitia, numquam libero facilis. Labore nobis earum aperiam
        assumenda cumque expedita consectetur exercitationem nulla laboriosam
        tempora non, facere, quasi neque quo magnam aspernatur alias. Amet odio
        quisquam tempore modi sint dolorem, tenetur exercitationem ullam minus
        architecto? Quisquam aliquid blanditiis saepe, rerum nam quis cupiditate
        aspernatur debitis alias distinctio quas porro autem voluptatum,
        voluptas vitae, dolorum praesentium quasi totam tenetur ut animi
        consequatur. Magnam dolore ipsa officia porro neque similique fugiat
        sequi, molestias velit qui. Dolores, ullam molestias accusamus eveniet
        non et! Error, ex, minus vel esse fugit eaque delectus beatae cumque
        ratione saepe modi accusantium tempora possimus. Veritatis placeat eum
        nemo reprehenderit! Facere similique corrupti ipsam, quaerat et magni
        iure reprehenderit architecto itaque eos distinctio voluptate rerum
        porro ratione dicta iste deserunt sit neque? Temporibus, voluptatibus
        ipsum enim modi dolores nihil. Provident pariatur unde eligendi fugiat
        optio ea iste architecto aliquid at magnam illo atque qui animi nobis
        iure neque culpa, et perspiciatis sapiente blanditiis. Esse quam, id
        tenetur nisi perferendis inventore minus amet consequatur, distinctio
        nostrum odit. Omnis corporis non beatae exercitationem reprehenderit
        sapiente voluptas, corrupti itaque eaque iure ipsam aut quis.
        Perferendis esse placeat iure. Aut tenetur commodi illum molestias odit
        accusantium porro? Et a quam aut maxime culpa optio earum ducimus eum?
        Veniam esse earum aperiam ratione minima distinctio doloremque modi
        omnis! Nemo nulla tempora neque obcaecati voluptatum, dolores hic dicta,
        asperiores reiciendis soluta officiis corrupti doloribus maxime minima
        optio in necessitatibus beatae suscipit esse et? Quam, fugit. Amet
        recusandae, est voluptates optio provident et veritatis quod. Illum
        voluptas nisi aut dicta odio ea ex porro ad cupiditate obcaecati
        officia, minima perferendis nulla ab expedita possimus quidem
        accusantium nobis fugit itaque laudantium veniam quibusdam. Nesciunt
        iste repudiandae eum, suscipit numquam ad dolores obcaecati iure nihil
        consectetur deserunt aliquam excepturi in maxime hic laudantium, nemo
        illo! Consequatur velit neque deserunt natus temporibus totam quasi
        nihil rem repudiandae autem optio nesciunt facilis accusantium, ea error
        blanditiis rerum quod odit veniam aliquid. Animi quod a culpa non
        dolores aut fuga debitis adipisci nam dolore corporis atque aliquid
        dolorum est necessitatibus ipsum, libero iusto, officia unde maiores
        sunt! Maxime, laudantium. Tempore iure, facilis a consequuntur
        laboriosam velit nemo odio. Molestiae nostrum veniam ratione at
        perferendis non eos? Eveniet cupiditate nam ea eos assumenda
        necessitatibus saepe earum magnam omnis similique exercitationem iusto
        tenetur aperiam sint eius velit veritatis reiciendis voluptatem, ut, eum
        adipisci aliquid ratione, repellat incidunt. Rerum odit dignissimos
        quaerat eaque dolorem blanditiis dolore consequatur necessitatibus!
        Corporis excepturi iure eum assumenda tenetur, magnam praesentium
        voluptatem et.
      </p>
    </div>
  );
}

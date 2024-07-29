(() => {

        const $elm = document.querySelector('#js-lessons');
        const $contents = $elm.getElementsByTagName('a');

        const contentsLen = $contents.length;
        let index = 0;
        while (index < contentsLen) {
            $contents[index].addEventListener('click', (e) => clickHandler (e));
            index++;

        };
        //クリックしたら実装
        const clickHandler = (e) => {
            e.preventDefault();
            const $target = e.currentTarget
            const $content =$target.nextElementSibling;
            if ($content.style.display === 'block' ){
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        };    
})();

/*クラスとインスタンス
() => {

	class Accordion {
		
		//初期化
		constructor(obj){

			console.log('obj', obj.hookName);

			const $elm = document.querySelector(obj.hookName);
			const $contents = $elm.getElementsByTagName(obj.tagName);

			const contentsLen = $contents.length;
			let index = 0;
			while (index < contentsLen) {
				$contents[index].addEventListener('click', (e) => this.clickHandler(e));	
				index++;
			}
		}

		//クリックしたら実行される処理
		clickHandler(e){
			e.preventDefault();

			const $target = e.currentTarget;
			const $content = $target.nextElementSibling;
			
			if($content.style.display === 'block'){
				$content.style.display = 'none';
			} else {
				$content.style.display ='block';
			}
		}
	}

	const fuckingAccordion = new Accordion({
		hookName: '#js-faq',
		tagName: 'p'
	});

	const dummyAccordion = new Accordion({
		hookName: '#js-accordion',
		tagName: 'a'
	});

	const miniAccordion = new Accordion({
		hookName: '#js-accordion-mini',
		tagName: 'dt'
	});






})();
*/
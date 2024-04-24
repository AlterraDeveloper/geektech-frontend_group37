const quotesJSON = '[{"author":"Наполеон Хилл","text":"Что разум человека может постигнуть и во что он может поверить, того он способен достичь"},{"author":"Альберт Эйнштейн","text":"Стремитесь не к успеху, а к ценностям, которые он дает"},{"author":"Флоренс Найтингейл","text":"Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других."},{"author":"Майкл Джордан","text":"За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха."},{"author":"Амелия Эрхарт","text":"Сложнее всего начать действовать, все остальное зависит только от упорства."},{"author":"Федор Достоевский","text":"Надо любить жизнь больше, чем смысл жизни."},{"author":"Джон Леннон","text":"Жизнь - это то, что с тобой происходит, пока ты строишь планы."},{"author":"Альберт Эйнштейн","text":"Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно."},{"author":"Марк Твен","text":" Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!"},{"author":"Борис Стругацкий","text":"Начинать всегда стоит с того, что сеет сомнения."},{"author":"Фазиль Искандер","text":"Настоящая ответственность бывает только личной. "},{"author":"Сократ","text":"Неосмысленная жизнь не стоит того, чтобы жить."},{"author":"Вуди Аллен","text":"80% успеха - это появиться в нужном месте в нужное время."},{"author":"Стив Джобс","text":"Ваше время ограничено, не тратьте его, живя чужой жизнью"},{"author":"Винс Ломбарди, тренер по американскому футболу","text":"Победа - это еще не все, все - это постоянное желание побеждать."},{"author":"Иммануил Кант","text":"Наука — это организованные знания, мудрость — это организованная жизнь."},{"author":"Наполеон Бонапарт","text":"В моем словаре нет слова «невозможно»."}]';

// JSON - JavaScript Object Notation

const quotes = JSON.parse(quotesJSON);

// Parsing - string -> object

function Quote(props) {
    return `<div class="quote">
                <img />
                <p class="quote-text">${props.text}</p>
                <p class="quote-author">${props.author}</p>
            </div>`
}

function Page(props) {
    // return `<div class="page ${props.selected ? "selected" : ""}">${props.page}</div>`
    return `<div class="page ${props.selected && "selected"}">${props.page}</div>`
}

const state = {
    allQuotes: quotes,
    quotesPerPage: 3,
    currentPage: 1,

    renderPagination() {
        const paginationContainer = document
            .querySelector(".pagination");

        paginationContainer.innerHTML = "";

        const totalPageCount = Math.ceil
        (this.allQuotes.length / this.quotesPerPage);

        for (let i = 1; i <= totalPageCount; i++) {
            const pageProps = {
                page: i,
                selected: i === this.currentPage
            }
            const page = Page(pageProps);
            paginationContainer.innerHTML += page;
        }

    },

    renderQuotes() {

        const startIndex = (this.currentPage - 1) * this.quotesPerPage;
        const displayQuotes = this.allQuotes.slice(startIndex
            , startIndex + this.quotesPerPage);

        const quotesContainer = document.querySelector(".wrapper");
        quotesContainer.innerHTML = "";

        for (const quote of displayQuotes) {
            const quoteProps = {
                text: quote.text,
                author: quote.author
            }
            const quoteHtml = Quote(quoteProps);
            quotesContainer.innerHTML += quoteHtml;
        }
    }
}

state.renderPagination();
state.renderQuotes();

document.body.onclick = (event) => {
    const targetElement = event.target;

    if (!targetElement.classList.contains("page"))
        return;

    const pageValue = Number(targetElement.innerText);

    state.currentPage = pageValue;
    state.renderPagination();
    state.renderQuotes();
}


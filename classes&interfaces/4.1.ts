// #4.1 Recap

type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }

    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }

    def(term: string) {
        return this.words[term]
    }

    delete(term: string) {
        if (this.words[term]) {
            delete this.words[term]
        }
    }

    update(word: Word) {
        if (this.words[word.term]) {
            this.words[word.term] = word.def
        }
    }
}

class Word {
    constructor(
        public term: string,
        public def: string,
    ) { }
}

const kimchi = new Word("kimchi", "한국의 음식")

const dict = new Dict()
dict.add(kimchi)
dict.def("kimchi")

kimchi.def = "한국 전통음식"
dict.update(kimchi)
dict.delete("kimchi")
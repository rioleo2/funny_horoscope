import OpenAI from "openai";
import typingAnimation from "./typeWriter.js";

const openai = new OpenAI({
    apiKey: 'sk-xKKm0QqiX9jjHNXf73A202Df1b3d4eEa9c747a30280c83Ef',
    baseURL: 'https://lk.neuroapi.host/v1',
    dangerouslyAllowBrowser: true,
});



async function Horoscope(sign) {
    let container = document.getElementsByClassName('horoscope__text')[0];
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: `Ничего не комментируй и напиши смешной и короткий (до 5 предложений) гороскоп про ${sign} на сегодня.`,
            },
        ],
    });
    const horoscopeText = completion.choices[0].message.content;
    typingAnimation(container, horoscopeText)
    // container.innerHTML = completion.choices[0].message.content;
    console.log(completion.choices[0].message.content);
}

export default function handleClick() {
    let placeholder = document.getElementsByClassName('placeholder')[0]
    let container = document.getElementsByClassName('horoscope__text')[0];
    placeholder.style.display = 'block';
    const formContainer = document.getElementById('signSelect');
    formContainer.style.display = 'none'
    let signElement = document.getElementById('sign');
    let signValue = signElement.value;

    Horoscope(signValue);
    setTimeout(() => {
        // Скрываем заглушку и показываем контент
        placeholder.style.display = 'none';
        container.style.display = 'block';
    }, 3000); // 2 секунды для примера
    // console.log(signValue)
}




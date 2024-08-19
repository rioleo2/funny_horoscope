import './App.css';
import RenderHoroscope from './components/horoscope.mjs';
function App() {
  return (
    <div>
      <body>
        <div className='container'>
          <main className="main">

            <h1 className="main__title">
              Забавный гороскоп
            </h1>

            <form id="signSelect">
              <label for="sign" className="sign__label">Выберите Ваш знак зодиака: </label>
                <select id="sign" name="sign" required>
                  <option value="Овен">Овен</option>
                  <option value="Телец">Телец</option>
                  <option value="Близнецы">Близнецы</option>
                  <option value="Рак">Рак</option>
                  <option value="Лев">Лев</option>
                  <option value="Дева">Дева</option>
                  <option value="Весы">Весы</option>
                  <option value="Скорпион">Скорпион</option>
                  <option value="Стрелец">Стрелец</option>
                  <option value="Козерог">Козерог</option>
                  <option value="Водолей">Водолей</option>
                  <option value="Рыбы">Рыбы</option>
                </select>
                <button type="button" onClick={RenderHoroscope} className="submit__button">🔮</button>
            </form>
            <p className="placeholder">Загрузка ...</p>
            <p className="horoscope__text">
            </p>
          </main>
        </div>
      </body>

    </div>
  )
}



export default App;

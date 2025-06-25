import React, { useState } from "react";
import styles from "./Form.module.css";
import logo from "./assets/logo_com_fundo.png";
import logo2 from "./assets/logo_com_fundo.png";

function App() {
  const [metodoPagamento, setMetodoPagamento] = useState("mbway");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [cartao, setCartao] = useState("fisico");

  const clubeIban = "PT50000201231234567890154";
  const clubeMbway = "912345678";

  function handleFileChange(e) {
    if (e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    } else {
      setSelectedFileName("");
    }
  }

  function removeFile() {
    setSelectedFileName("");
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <header className={styles.header}>
          <img
            src={logo}
            alt="Logo Casa do Povo de Freixo"
            className={styles.logo}
          />
          <div className={styles.clubNameContainer}>
            <div className={styles.clubName}>Casa do Povo de Freixo</div>
          </div>
          <img src={logo2} alt="Outro Logo" className={styles.logo} />
        </header>

        <h1 className={styles.title}>Registo de Sócio</h1>

        <form>
          <label htmlFor="nome">Nome Completo</label>
          <input
            id="nome"
            type="text"
            className={styles.inputField}
            required
            autoComplete="name"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className={styles.inputField}
            required
            autoComplete="email"
          />

          <label htmlFor="telemovel">Telemóvel</label>
          <input
            id="telemovel"
            type="tel"
            className={styles.inputField}
            required
            autoComplete="tel"
          />

          <label htmlFor="cartaoCidadao">Nº Cartão de Cidadão</label>
          <input
            id="cartaoCidadao"
            type="text"
            className={styles.inputField}
            required
            autoComplete="off"
          />

          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
            id="dataNascimento"
            type="date"
            className={styles.inputField}
            required
          />

          <label htmlFor="morada">Morada</label>
          <input
            id="morada"
            type="text"
            className={styles.inputField}
            required
            autoComplete="street-address"
          />

          <label htmlFor="nacionalidade">Nacionalidade</label>
          <input
            id="nacionalidade"
            type="text"
            className={styles.inputField}
            required
          />

          {/* Tipo de Cartão - agora aparece antes */}
          <fieldset
            className={styles.cardTypeContainer}
            aria-label="Tipo de cartão"
          >
            <legend className={styles.cardTypeLegend}>Tipo de Cartão</legend>

            <label
              className={`${styles.cardTypeOption} ${
                cartao === "fisico" ? styles.selectedCard : ""
              }`}
            >
              <input
                type="radio"
                name="cartao"
                value="fisico"
                checked={cartao === "fisico"}
                onChange={() => setCartao("fisico")}
                className={styles.hiddenRadio}
              />
              <span className={styles.icon}>🖨️</span>
              Físico
            </label>

            <label
              className={`${styles.cardTypeOption} ${
                cartao === "digital" ? styles.selectedCard : ""
              }`}
            >
              <input
                type="radio"
                name="cartao"
                value="digital"
                checked={cartao === "digital"}
                onChange={() => setCartao("digital")}
                className={styles.hiddenRadio}
              />
              <span className={styles.icon}>📱</span>
              Digital
            </label>

            <label
              className={`${styles.cardTypeOption} ${
                cartao === "ambos" ? styles.selectedCard : ""
              }`}
            >
              <input
                type="radio"
                name="cartao"
                value="ambos"
                checked={cartao === "ambos"}
                onChange={() => setCartao("ambos")}
                className={styles.hiddenRadio}
              />
              <span className={styles.icon}>🖨️ + 📱</span>
              Ambos
            </label>
          </fieldset>

          {/* Forma de Pagamento */}
          <label>Forma de Pagamento</label>
          <div className={styles.paymentMethods}>
            <div
              className={`${styles.paymentOption} ${
                metodoPagamento === "mbway" ? styles.selected : ""
              }`}
              onClick={() => setMetodoPagamento("mbway")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && setMetodoPagamento("mbway")
              }
            >
              <img
                src="/icons/mbway.png"
                alt="MB WAY"
                className={styles.paymentIcon}
              />
              <span>MB WAY</span>
            </div>

            <div
              className={`${styles.paymentOption} ${
                metodoPagamento === "iban" ? styles.selected : ""
              }`}
              onClick={() => setMetodoPagamento("iban")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setMetodoPagamento("iban")}
            >
              <img
                src="/icons/iban.png"
                alt="IBAN"
                className={styles.paymentIcon}
              />
              <span>Transferência</span>
            </div>
          </div>

          {metodoPagamento === "mbway" && (
            <p className={styles.infoText}>
              Por favor, envie o valor para o número MB WAY do clube:{" "}
              <strong>{clubeMbway}</strong>
            </p>
          )}

          {metodoPagamento === "iban" && (
            <p className={styles.infoText}>
              Por favor, faça a transferência para o IBAN do clube:{" "}
              <strong>{clubeIban}</strong>
            </p>
          )}

          {/* Comprovativo */}
          <label htmlFor="comprovativo" className={styles.fileLabel}>
            Comprovativo de Pagamento
          </label>
          <input
            id="comprovativo"
            type="file"
            accept=".jpg,.png,.pdf"
            className={styles.fileInput}
            onChange={handleFileChange}
            required
          />
          {selectedFileName && (
            <div className={styles.fileSelected}>
              <span>{selectedFileName}</span>
              <button
                type="button"
                onClick={removeFile}
                className={styles.removeFileBtn}
                aria-label="Remover ficheiro selecionado"
              >
                ×
              </button>
            </div>
          )}

          <button type="submit" className={styles.submitButton}>
            Registar Sócio
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

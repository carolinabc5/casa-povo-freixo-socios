import { useState } from "react";
import styles from "./Form.module.css";
import logo from "./assets/logo_com_fundo.png"; // Usa o mesmo logo nos dois lados

function App() {
  const [metodoPagamento, setMetodoPagamento] = useState("mbway");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [tipoCartao, setTipoCartao] = useState("fisico");

  const clubeIban = "PT50000201231234567890154";
  const clubeMbway = "912345678";

  function handleFileChange(e) {
    if (e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    } else {
      setSelectedFileName("");
    }
  }

  function handleRemoveFile() {
    const inputFile = document.getElementById("comprovativo");
    if (inputFile) {
      inputFile.value = "";
    }
    setSelectedFileName("");
  }

  function handleTipoCartaoChange(e) {
    setTipoCartao(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <header className={styles.header}>
          <img src={logo} alt="Logo esquerdo" className={`${styles.logo} ${styles.left}`} />
          <div className={styles.clubNameContainer}>
            <div className={styles.clubName}>Casa do Povo de Freixo</div>
          </div>
          <img src={logo} alt="Logo direito" className={`${styles.logo} ${styles.right}`} />
        </header>

        <h1 className={styles.title}>Registo de Sócio</h1>

        <form>
          <label htmlFor="nome">Nome Completo</label>
          <input id="nome" type="text" className={styles.inputField} required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" className={styles.inputField} required />

          <label htmlFor="telemovel">Telemóvel</label>
          <input id="telemovel" type="tel" className={styles.inputField} required />

          <label htmlFor="cartaoCidadao">Nº Cartão de Cidadão</label>
          <input id="cartaoCidadao" type="text" className={styles.inputField} required />

          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input id="dataNascimento" type="date" className={styles.inputField} required />

          <label htmlFor="morada">Morada</label>
          <input id="morada" type="text" className={styles.inputField} required />

          <label htmlFor="nacionalidade">Nacionalidade</label>
          <input id="nacionalidade" type="text" className={styles.inputField} required />

          <fieldset className={styles.cardTypeWrapper}>
            <legend className={styles.sectionTitle}>Tipo de Cartão</legend>
            <div className={styles.cardOptions}>
              {["fisico", "digital", "ambos"].map((tipo) => (
                <label
                  key={tipo}
                  className={`${styles.cardOption} ${tipoCartao === tipo ? styles.selected : ""}`}
                >
                  <input
                    type="radio"
                    name="tipoCartao"
                    value={tipo}
                    checked={tipoCartao === tipo}
                    onChange={handleTipoCartaoChange}
                    required
                  />
                  <span className={styles.emoji}>
                    {tipo === "fisico" ? "💳" : tipo === "digital" ? "📱" : "💳 + 📱"}
                  </span>
                  <span>
                    {tipo === "fisico" ? "Físico" : tipo === "digital" ? "Digital" : "Ambos"}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <label>Forma de Pagamento</label>
          <div className={styles.paymentMethods}>
            <div
              className={`${styles.paymentOption} ${metodoPagamento === "mbway" ? styles.selected : ""}`}
              onClick={() => setMetodoPagamento("mbway")}
            >
              <img src="/icons/mbway.png" alt="MB WAY" className={styles.paymentIcon} />
              <span>MB WAY</span>
            </div>

            <div
              className={`${styles.paymentOption} ${metodoPagamento === "iban" ? styles.selected : ""}`}
              onClick={() => setMetodoPagamento("iban")}
            >
              <img src="/icons/iban.png" alt="IBAN" className={styles.paymentIcon} />
              <span>Transferência</span>
            </div>
          </div>

          {metodoPagamento === "mbway" && (
            <p className={styles.infoText}>
              Por favor, envie o valor para o número MB WAY do clube: <strong>{clubeMbway}</strong>
            </p>
          )}

          {metodoPagamento === "iban" && (
            <p className={styles.infoText}>
              Por favor, faça a transferência para o IBAN do clube: <strong>{clubeIban}</strong>
            </p>
          )}

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
              <span className={styles.fileName}>Ficheiro selecionado: {selectedFileName}</span>
              <button type="button" className={styles.removeFileBtn} onClick={handleRemoveFile}>
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

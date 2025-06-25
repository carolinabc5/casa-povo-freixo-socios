import { useState } from "react";
import styles from "./Form.module.css";
import logo from "./assets/logo_com_fundo.png";
import logo2 from "./assets/logo_com_fundo.png";

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
    // Para limpar o input file de forma controlada, podes usar ref ou reset do form.
    // Aqui vou resetar o form manualmente:
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
          <img src={logo} alt="Logo Casa do Povo de Freixo" className={styles.logo} />
          <div className={styles.clubNameContainer}>
            <div className={styles.clubName}>Casa do Povo de Freixo</div>
          </div>
          <img src={logo2} alt="Outro Logo" className={styles.logo} />
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
              <label className={styles.cardOption}>
                <input
                  type="radio"
                  name="tipoCartao"
                  value="fisico"
                  checked={tipoCartao === "fisico"}
                  onChange={handleTipoCartaoChange}
                  required
                />
                <span className={styles.emoji}>💳</span>
                <span>Físico</span>
              </label>

              <label className={styles.cardOption}>
                <input
                  type="radio"
                  name="tipoCartao"
                  value="digital"
                  checked={tipoCartao === "digital"}
                  onChange={handleTipoCartaoChange}
                />
                <span className={styles.emoji}>📱</span>
                <span>Digital</span>
              </label>

              <label className={styles.cardOption}>
                <input
                  type="radio"
                  name="tipoCartao"
                  value="ambos"
                  checked={tipoCartao === "ambos"}
                  onChange={handleTipoCartaoChange}
                />
                <span className={styles.emoji}>💳 + 📱</span>
                <span>Ambos</span>
              </label>
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

import { useState } from "react";
import styles from "./Form.module.css";
import logo from "./assets/logo_com_fundo.png";

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
    document.getElementById("comprovativo").value = "";
    setSelectedFileName("");
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <header className={styles.header}>
          <img src={logo} alt="Logo Casa do Povo de Freixo" className={styles.logo} />
          <div className={styles.clubNameContainer}>
            <div className={styles.clubName}>Casa do Povo de Freixo</div>
          </div>
          <img src={logo} alt="Outro Logo" className={styles.logo} />
        </header>

        <h1 className={styles.title}>Registo de Sócio</h1>

        <form>
          {/* Campos do formulário omitidos para brevidade... */}
          
          {/* Tipo de Cartão */}
          <fieldset className={styles.cardTypeWrapper}>
            <legend className={styles.sectionTitle}>Tipo de Cartão</legend>
            <div className={styles.cardOptions}>
              <label
                className={`${styles.cardOption} ${tipoCartao === "fisico" ? styles.selected : ""}`}
              >
                <input
                  type="radio"
                  name="tipoCartao"
                  value="fisico"
                  checked={tipoCartao === "fisico"}
                  onChange={() => setTipoCartao("fisico")}
                  required
                />
                <span className={styles.emoji}>💳</span>
                <span>Físico</span>
              </label>

              <label
                className={`${styles.cardOption} ${tipoCartao === "digital" ? styles.selected : ""}`}
              >
                <input
                  type="radio"
                  name="tipoCartao"
                  value="digital"
                  checked={tipoCartao === "digital"}
                  onChange={() => setTipoCartao("digital")}
                  required
                />
                <span className={styles.emoji}>📱</span>
                <span>Digital</span>
              </label>

              <label
                className={`${styles.cardOption} ${tipoCartao === "ambos" ? styles.selected : ""}`}
              >
                <input
                  type="radio"
                  name="tipoCartao"
                  value="ambos"
                  checked={tipoCartao === "ambos"}
                  onChange={() => setTipoCartao("ambos")}
                  required
                />
                <span className={styles.emoji}>💳 + 📱</span>
                <span>Ambos</span>
              </label>
            </div>
          </fieldset>

          {/* Forma de Pagamento */}
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

          {/* Texto de instruções de pagamento */}
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

          {/* Comprovativo de pagamento */}
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

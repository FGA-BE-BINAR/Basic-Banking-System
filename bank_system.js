class BankAccount {
  constructor(initialBalance) {
    this.saldo = initialBalance;
  }

  async deposit() {
    let jumlah = window.prompt(
      "Masukan jumlah saldo yang ingin ditambahkan :",
      "0"
    );
    jumlah = parseFloat(jumlah);
    if (!isNaN(jumlah) && jumlah > 0) {
      await this.delayTransaction();
      this.saldo += jumlah;
      alert("Saldo berhasil ditambahkan. saldo anda saat ini :" + this.saldo);
    } else {
      alert("Saldo yang anda masukan tidak valid");
    }
  }

  async widhraw() {
    let jumlah = window.prompt(
      "Masukan jumlah saldo yang ingin dikurangi :",
      "0"
    );
    jumlah = parseFloat(jumlah);
    if (!isNaN(jumlah) && jumlah > 0) {
      if (this.saldo - jumlah < 0) {
        await this.delayTransaction();
        alert("Saldo yang anda masukan melebihi sisa saldo akun");
      } else {
        await this.delayTransaction();
        this.saldo -= jumlah;
        alert("Saldo berhasil dikurangi. saldo anda saat ini :" + this.saldo);
      }
    } else {
      alert("Saldo yang anda masukan tidak valid");
    }
  }

  delayTransaction() {
    return new Promise((resolve, reject) => setTimeout(resolve, 2000)); // delay 2 detik
  }

  async main() {
    let option;
    let continueLoop = true;
    while (continueLoop) {
      option = window.prompt(
        `Selamat datang, saldo anda saat ini ${this.saldo}\n\n di Pilih menu : \n1. Deposit\n2. Witdhraw\n3. Keluar dari program`,
        "1"
      );
      switch (option) {
        case "1":
          await this.deposit();
          break;
        case "2":
          await this.widhraw();
          break;
        case "3":
          alert("Terimakasih telah berkunjung");
          continueLoop = false;
          break;
        default:
          alert("Maaf, menu yang anda pilih tidak tersedia");
      }
    }
  }
}

const account = new BankAccount(10000);
account.main();

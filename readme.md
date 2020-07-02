endpoint====>

*Nasabah
    1. Create Nasahab
        http://localhost:8000/api/sukarela/nasabah
        input {
            nama,
            email,
            nmr_rekening,
            saldo,
            alamat,
            ktp,
            hp
        }
        POST

    2. Get Mutasi 
        http://localhost:8000/api/sukarela/nasabah/mutasi
        input {
            nmr_rekening
        }
    3. Get All Nasabah 
        http://localhost:8000/api/sukarela/nasabah

    4. Get Nasabah By Nomor rekening
        http://localhost:8000/api/sukarela/nasabah/nmr_rekening



*Setoran
    1.Create Setoran dana
        http://localhost:8000/api/sukarela/setor/
        input {
           nmr_rekening,
           jml_setor 
        }
        POST
    2. History Setoran
        http://localhost:8000/api/sukarela/setor/
        input{
            nmr_rekening
        }

*Withdraw
    1.Create Withdraw dana
        http://localhost:8000/api/sukarela/withdraw/
        input {
           nmr_rekening,
           jml_withdraw 
        }
        POST
    2. History Withdraw
        http://localhost:8000/api/sukarela/withdraw/
        input{
            nmr_rekening
        }


*Bunga
    1.Create Bunga Perbulan
        http://localhost:8000/api/sukarela/bunga/
        input{
           nmr_rekening,
           tgl_awal,
           tgl_akhir,
           suku_bunga,
           tahun(jumlah hari dalam 1 tahun) 
        }
    2.Get data Bungan by nomor rekening
        http://localhost:8000/api/sukarela/bunga/
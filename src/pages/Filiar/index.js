import {
  Container,
  Box,
  Typography,
  Breadcrumbs,
  Divider,
  FormControl,
} from "@mui/material";
import useWindowDimensions from "../../dimensions";
import { useTheme } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useForm } from "react-hook-form";
import React from "react";

const Filiar = () => {
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log(data);

  const data = new Date();
  const dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 12 }}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: { xs: "column", md: "row" },
          pt: 5,
          background: "#f7f7f7",
          backgroundSize: "cover",
          paddingBlock: 5,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            mb: { xs: 1, md: 0 },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <span className="menu-title" style={{ marginLeft: width < 768 ? 0 : 15 }}>
            PREENCHA O FORMULÁRIO DE FILIAÇÃO (INDIVIDUAL)
          </span>
        </Container>
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="medium" sx={{ color: "#b2924b" }} />
            }
            aria-label="breadcrumb"
            style={{marginRight: width < 768 ? 0 : 15}}
          >
            <a href="#" className="bcrumb">
              Home
            </a>
            <span className="bcrumb">Filie-se</span>
          </Breadcrumbs>
        </Container>
      </Box>

  <form onSubmit={handleSubmit(onSubmit)}>
    <Box sx={{ paddingInline: { xs: 1, sm: 2.5, md: 4 }}}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f2f2f2",
          mt: 10,
          pt: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h3 className="info-pessoais" style={{ alignSelf: width < 768 ? 'center' : 'flex-start' }}>Informações Pessoais</h3>
          <Divider sx={{ width: 200, height: 2, bgcolor: "#b2924b", mb: 5, alignSelf: width < 768 ? 'center' : 'flex-start' }} />
          <label htmlFor="nome">Seu nome: (obrigatório)</label>
          <input
            className="input-style"
            id="nome"
            style={{ marginBottom: 30 }}
            {...register("userName")}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between",
              flex: 1,
              mb: 3
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flex: 1,
              }}
            >
              <label htmlFor="dataDeNascimento">Data de nascimento:</label>
              <input
                className="input-style"
                style={{ width: "100%", maxWidth: 220, marginBottom: width < 600 ? 30 : 0 }}
                type="date"
                id="dataDeNascimento"
                {...register("birth")}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                alignItems: "flex-start",
                ml: { xs: 0, sm: 2 },
              }}
            >
              <label htmlFor="sexoDiv">Sexo:</label>
              <Box
                id="sexoDiv"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 1,
                  mb: { xs: 3, sm: 0 }
                }}
              >
                <input
                  className="input-style"
                  type="radio"
                  id="masc"
                  {...register("gender")}
                  value="Masculino"
                />
                <label
                  htmlFor="masc"
                  style={{ marginRight: 15, marginLeft: 5 }}
                >
                  Masculino
                </label>
                <input
                  className="input-style"
                  type="radio"
                  id="femi"
                  {...register("gender")}
                  value="Feminino"
                />
                <label htmlFor="femi" style={{ marginLeft: 5 }}>
                  Feminino
                </label>
              </Box>
            </Box>
            <Box
              sx={{
                ml: { xs: 0, sm: 2 },
                alignItems: "flex-start",
                display: "flex",
                flex: 1,
                flexDirection: "column",
              }}
            >
              <label htmlFor="cpf">CPF: (obrigatório)</label>
              <input
                className="input-style"
                id="cpf"
                placeholder="000.000.000-00"
                {...register("cpf")}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between",
              flex: 1,
              mb: 3,
            }}
          >
            <Box
              sx={{
                alignItems: "flex-start",
                display: "flex",
                flex: 1,
                flexDirection: "column",
                mb: {xs: 3, sm: 0},
              }}
            >
              <label htmlFor="rg">RG: (Funcional, para militar)</label>
              <input className="input-style" id="rg" {...register("rg")} />
            </Box>
            <Box
              sx={{
                ml: { xs: 0, sm: 2 },
                alignItems: "flex-start",
                display: "flex",
                flex: 1,
                flexDirection: "column",
              }}
            >
              <label htmlFor="oe">Orgão expedidor:</label>
              <input className="input-style" id="oe" {...register("issuing")} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between",
              flex: 1,
              mb: 3,
            }}
          >
            <Box
              sx={{
                alignItems: "flex-start",
                display: "flex",
                flex: 1,
                flexDirection: "column",
                mb: {xs: 3, sm: 0},
              }}
            >
              <label htmlFor="nac">Nacionalidade:</label>
              <input className="input-style" id="nac" {...register("nationality")}/>
            </Box>
            <Box
              sx={{
                ml: { xs: 0, sm: 2 },
                alignItems: "flex-start",
                display: "flex",
                flex: 1,
                flexDirection: "column",
              }}
            >
              <label htmlFor="estadoCivil">Estado civil:</label>
              <select className="input-style" {...register("marital")} id="estCiv">
                <option value="">--Escolha uma opção--</option>
                <option value="single">Solteiro</option>
                <option value="merried">Casado</option>
                <option value="other">Outro</option>
              </select>
            </Box>
          </Box>
          <label htmlFor="nomeDaMae">Nome da mãe: (obrigatório)</label>
          <input
            className="input-style"
            id="nomeDaMae"
            style={{ marginBottom: 30 }}
            {...register("motherName")}
          />
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f2f2f2",
          mt: 5,
          pt: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h3 className="info-pessoais" style={{ alignSelf: width < 768 ? 'center' : 'flex-start' }}>Informações Para Contato</h3>
          <Divider sx={{ width: 200, height: 2, bgcolor: "#b2924b", mb: 5, alignSelf: width < 768 ? 'center' : 'flex-start' }} />
          <label htmlFor="cep">CEP: (obrigatório)</label>
          <input
            className="input-style"
            id="cep"
            style={{ marginBottom: 30, width: 220 }}
            {...register("cep")}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between",
              flex: 1,
              mb: 3,
            }}
          >
            <Box
              sx={{
                alignItems: "flex-start",
                display: "flex",
                flex: 2,
                flexDirection: "column",
                mb: {xs: 3, sm: 0},
              }}
            >
              <label htmlFor="end">Endereço: (obrigatório)</label>
              <input className="input-style" id="end" {...register("address")}/>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: width < 360 ? "column" : "row",
                width: "100%",
                justifyContent: "space-between",
                flex: 1.7,
              }}
            >
              <Box
                sx={{
                  ml: { xs: 0, sm: 2 },
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  mb: width < 360 ? 3 : 0
                }}
              >
                <label htmlFor="numeroEnd">Número:</label>
                <input
                  className="input-style"
                  id="numeroEnd"
                  style={{ maxWidth: 100 }}
                  {...register("numberHouse")}
                />
              </Box>
              <Box
                sx={{
                  ml: { xs: 0, sm: 2 },
                  alignItems: "flex-start",
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                }}
                style={{ marginLeft: width < 360 ? 0 : 15 }}
              >
                <label htmlFor="complemento">Complemento:</label>
                <input className="input-style" id="complemento" {...register("complement")}/>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between",
              flex: 1,
              mb: 3,
            }}
          >
            <Box
              sx={{
                alignItems: "flex-start",
                display: "flex",
                flex: 1.3,
                flexDirection: "column",
                mb: {xs: 3, sm: 0},
              }}
            >
              <label htmlFor="bairro">Bairro: (obrigatório)</label>
              <input className="input-style" id="bairro" {...register("neighborhood")}/>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: width < 360 ? "column" : "row",
                width: "100%",
                justifyContent: "space-between",
                flex: 2,
              }}
            >
              <Box
                sx={{
                  ml: { xs: 0, sm: 2 },
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1.5,
                  mb: width < 360 ? 3 : 0
                }}
              >
                <label htmlFor="cidade">Cidade:</label>
                <input className="input-style" id="cidade" {...register("city")}/>
              </Box>
              <Box
                sx={{
                  ml: { xs: 0, sm: 2 },
                  alignItems: "flex-start",
                  display: "flex",
                  flex: 0.6,
                  flexDirection: "column",
                }}
                style={{ marginLeft: width < 360 ? 0 : 15 }}
              >
                <label htmlFor="estado">Estado:</label>
                <select id="estado" className="input-style" {...register("state")}>
                  <option value="">--Selecione--</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between",
              flex: 1,
              mb: 3,
            }}
          >
            <Box
              sx={{
                alignItems: "flex-start",
                display: "flex",
                flex: 1,
                flexDirection: "column",
                mb: {xs: 3, sm: 0},
              }}
            >
              <label htmlFor="telefone">Telefone: (obrigatório)</label>
              <input className="input-style" id="telefone" {...register("phone1")}/>
            </Box>
            <Box
              sx={{
                ml: { xs: 0, sm: 2 },
                alignItems: "flex-start",
                display: "flex",
                flex: 1,
                flexDirection: "column",
              }}
            >
              <label htmlFor="celular">Celular:</label>
              <input className="input-style" id="celular" {...register("phone2")}/>
            </Box>
          </Box>
          <label htmlFor="email">Email: (obrigatório)</label>
          <input
            className="input-style"
            id="email"
            type="email"
            {...register("email")}
            style={{ marginBottom: 30 }}
          />
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f2f2f2",
          mt: 5,
          pt: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h3 className="info-pessoais" style={{ alignSelf: width < 768 ? 'center' : 'flex-start' }}>Informações Profissionais</h3>
          <Divider sx={{ width: 200, height: 2, bgcolor: "#b2924b", mb: 5, alignSelf: width < 768 ? 'center' : 'flex-start' }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: width < 360 ? "column" : "row",
              width: "100%",
              justifyContent: "space-between",
              flex: 1,
              mb: 3,
            }}
          >
            <Box
              sx={{
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                mb: width < 360 ? 3 : 0
              }}
            >
              <label htmlFor="orgAtua">Orgão em que atua:</label>
              <select id="orgAtua" className="input-style" {...register("area")}>
                <option value="">--selecione--</option>
                <option value="Polícia Militar">Polícia Militar</option>
                <option value="Bombeiro Militar">Bombeiro Militar</option>
                <option value="Bombeiro Militar">Outro</option>
              </select>
            </Box>
            <Box
              sx={{
                ml: { xs: 0, sm: 2 },
                alignItems: "flex-start",
                display: "flex",
                flex: 1,
                flexDirection: "column",
              }}
              style={{ marginLeft: width < 360 ? 0 : 15 }}
            >
              <label htmlFor="grad">Graduação:</label>
              <select id="grad" className="input-style" name="rank" {...register("grade")}>
                <option value="">--selecione--</option>
                <option value="Soldado">Soldado</option>
                <option value="Cabo">Cabo</option>
                <option value="3º Sargento">3º Sargento</option>
                <option value="2º Sargento">2º Sargento</option>
                <option value="1º Sargento">1º Sargento</option>
                <option value="Subtenente">Subtenente</option>
                <option value="Aspirante">Aspirante</option>
                <option value="2º Tenente">2º Tenente</option>
                <option value="1º Tenente">1º Tenente</option>
                <option value="Capitão">Capitão</option>
                <option value="Major">Major</option>
                <option value="Tenente-Coronel">Tenente-Coronel</option>
                <option value="Coronel">Coronel</option>
                <option value="Outro">Outro</option>
              </select>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between",
              flex: 1,
              mb: 3,
            }}
          >
            <Box
              sx={{
                alignItems: "flex-start",
                display: "flex",
                flex: 1,
                flexDirection: "column",
                mb: {xs: 3, sm: 0},
              }}
            >
              <label htmlFor="matricula">Matrícula: (obrigatório)</label>
              <input className="input-style" id="matricula" {...register("registration")}/>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: width < 360 ? "column" : "row",
                width: "100%",
                justifyContent: "space-between",
                flex: 2,
              }}
            >
              <Box
                sx={{
                  ml: { xs: 0, sm: 2 },
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  mb: width < 360 ? 3 : 0
                }}
              >
                <label htmlFor="estadoAtua">Estado em que atua:</label>
                <select id="estadoAtua" className="input-style" {...register("workState")}>
                  <option value="">--Selecione--</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </Box>
              <Box
                sx={{
                  ml: { xs: 0, sm: 2 },
                  alignItems: "flex-start",
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  mb: 3
                }}
                style={{ marginLeft: width < 360 ? 0 : 15 }}
              >
                <label htmlFor="batalhao">Batalhão:</label>
                <input className="input-style" id="batalhao" {...register("battalion")}/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f2f2f2",
          mt: 5,
          pt: 3,
          pb: 10
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mb: 10
          }}
        >
          <h3 className="info-pessoais" style={{ alignSelf: width < 768 ? 'center' : 'flex-start' }}>Como conheceu?</h3>
          <Divider sx={{ width: 200, height: 2, bgcolor: "#b2924b", mb: 5, alignSelf: width < 768 ? 'center' : 'flex-start' }} />
          <label htmlFor='conheceu'>Como você teve conhecimento da nossa empresa?</label>
          <select id='conheceu' name='como conheceu' className="input-style" {...register("know")}>
            <option value='WhatsApp'>WhatsApp</option>
            <option value='Facebook'>Facebook</option>
            <option value='Instagram'>Instagram</option>
            <option value='Filiado'>Filiado</option>
            <option value='Colaborador'>Colaborador</option>
            <option value='Outro meio'>Outro meio</option>
          </select>
        </Box>

        <input style={{ alignSelf: width < 768 ? 'center' : 'flex-start' }} type="submit" value="Enviar" className="submit"></input>
      </Container>
    </Box>
  </form>
  </Box>
  );
};

export default Filiar;

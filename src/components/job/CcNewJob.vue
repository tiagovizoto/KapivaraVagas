<template lang="html">
  <div class="muhahaha">
    <div class="column is-10 is-offset-1">
      <h2 class="title">Cadastrar Novo Job</h2>
      <b-field label="Titulo">
        <b-input v-model="title" required placeholder="Programmer Python/NumPy"></b-input>
      </b-field>
      <b-field label="Nome Empresa">
          <b-input v-model="business_name" required placeholder="Google INC"></b-input>
      </b-field>
      <b-field label="Localização">
          <b-input v-model="location" required placeholder="Caxias do Sul - ES"></b-input>
      </b-field>
      <b-field label="Email para contato">
          <b-input v-model="email" type="email" placeholder="email@empresa.com"></b-input>
      </b-field>
      <b-field label="Site da empresa">
          <b-input v-model="website" required type="url" placeholder="www.google.com.br"></b-input>
      </b-field>
      <b-field label="Endereço da vaga (quando preenchido, os candidatos serão encaminhados para este endereço)">
          <b-input v-model="url_job" type="url" placeholder="http://muhahahah.com"></b-input>
      </b-field>

      <h4 class="label">Tipo de Contratação</h4>
      <b-radio-group v-model="employment_contract">
          <div class="field">
              <b-radio value="undefined">Não Especificado</b-radio>
          </div>
          <div class="field">
              <b-radio value="clt">CLT</b-radio>
          </div>
          <div class="field">
              <b-radio value="pj">PJ</b-radio>
          </div>
      </b-radio-group>
      <br>
      <h4 class="label">Qual é a modalidade de trabalho?</h4>
      <b-radio-group v-model="modality">
          <div class="field">
              <b-radio value="presencial">Presencial</b-radio>
          </div>
          <div class="field">
              <b-radio value="remote">Remoto</b-radio>
          </div>
          <div class="field">
              <b-radio value="freela">Freela</b-radio>
          </div>
          <div class="field">
              <b-radio value="trainee">Trainee</b-radio>
          </div>
      </b-radio-group>
      <br>
      <h4 class="label">Salário</h4>
      <b-radio-group v-model="salary">
          <div class="field">
              <b-radio value="undefined">N/A</b-radio>
          </div>
          <div class="field">
              <b-radio value="intern">Abaixo de R$3.000</b-radio>
          </div>
          <div class="field">
              <b-radio value="junior">R$3.000 - R$6.000</b-radio>
          </div>
          <div class="field">
              <b-radio value="medium">R$6.000 - R$9.000</b-radio>
          </div>
          <div class="field">
              <b-radio value="senior">Acima de R$9.000</b-radio>
          </div>
          <div class="field">
              <b-radio value="value_by_hour">Valor hora a combinar</b-radio>
          </div>
      </b-radio-group>
      <br>
      <b-field label="Descrição">
          <b-input v-model="description"  type="textarea"></b-input>
      </b-field>
      <b-field label="Habilidades/Requerimentos">
          <b-input v-model="skills" type="textarea"></b-input>
      </b-field>
      <br>
      <a class="button is-large is-success ">Salvar</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CcNewJob',
  data () {
    return {
      title: '',
      business_name: '',
      location: '',
      email: '',
      website: '',
      url_job: '',
      salary: '',
      employment_contract: '',
      modality: '',
      description: '',
      skills: ''
    }
  }
}
</script>

<style lang="css" scoped>

</style>
